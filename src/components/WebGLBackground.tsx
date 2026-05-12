import { useEffect, useRef } from 'react';

const VERT = `
  attribute vec2 a_pos;
  varying vec2 v_uv;
  void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const FRAG = `
  precision mediump float;
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  float blob(vec2 uv, vec2 p, float r, float soft) {
    float aspect = u_resolution.x / u_resolution.y;
    float d = length((uv - p) * vec2(aspect, 1.0));
    return smoothstep(r, r - soft, d);
  }

  void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.25;
    float breath = sin(t * 0.9) * 0.5 + 0.5;

    vec2 drift = u_mouse * 0.018;

    vec2 p1 = vec2(0.18 + drift.x, 0.28 - drift.y) + vec2(sin(t * 0.6) * 0.06, cos(t * 0.5) * 0.05);
    vec2 p2 = vec2(0.82 - drift.x * 0.6, 0.72 + drift.y * 0.6) + vec2(cos(t * 0.5) * 0.07, sin(t * 0.7) * 0.05);
    vec2 p3 = vec2(0.5 + drift.x * 0.3, 0.45 - drift.y * 0.3) + vec2(sin(t * 0.35) * 0.09, cos(t * 0.4) * 0.07);
    vec2 p4 = vec2(0.65, 0.2) + vec2(cos(t * 0.8) * 0.04, sin(t * 0.6) * 0.04);

    float b1 = blob(uv, p1, 0.38 + breath * 0.06, 0.32);
    float b2 = blob(uv, p2, 0.30 + breath * 0.05, 0.26);
    float b3 = blob(uv, p3, 0.22 + breath * 0.04, 0.19);
    float b4 = blob(uv, p4, 0.16 + breath * 0.03, 0.14);

    // #5fc7cd → rgb(0.373, 0.780, 0.804)
    vec3 teal   = vec3(0.373, 0.780, 0.804);
    // #8273b5 → rgb(0.510, 0.451, 0.710)
    vec3 purple = vec3(0.510, 0.451, 0.710);

    vec3 color = teal   * b1 * 0.55
               + purple * b2 * 0.30
               + teal   * b3 * 0.35
               + purple * b4 * 0.22;

    color = clamp(color, 0.0, 0.65);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, 'u_time');
    const uRes   = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth)  * 2 - 1;
      my = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMouse);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const render = (ms: number) => {
      gl.uniform1f(uTime,  ms * 0.001);
      gl.uniform2f(uRes,   canvas.width, canvas.height);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.65,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
