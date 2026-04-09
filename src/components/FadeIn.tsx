import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const offsets: Record<Direction, (d: number) => CSSProperties> = {
  up: (d) => ({ transform: `translateY(${d}px)` }),
  down: (d) => ({ transform: `translateY(-${d}px)` }),
  left: (d) => ({ transform: `translateX(${d}px)` }),
  right: (d) => ({ transform: `translateX(-${d}px)` }),
  none: () => ({ transform: 'none' }),
};

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 500,
  distance = 24,
  className = '',
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const hidden = offsets[direction](distance);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translate(0,0)' : hidden.transform,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
