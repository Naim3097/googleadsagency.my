import type { ReactNode } from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import WebGLBackground from './WebGLBackground.tsx';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1c1c1d] text-white relative overflow-x-hidden">
      <WebGLBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
