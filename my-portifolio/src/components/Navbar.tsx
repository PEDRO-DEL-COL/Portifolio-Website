// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-teal-900/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#experiencia" className="hover:underline">Experiência</a>
          <a href="#projetos" className="hover:underline">Projetos</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </div>
      </nav>
    </header>
  );
}
