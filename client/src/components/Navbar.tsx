"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItemClass = "text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-300";

  return (
    <header className="sticky top-0 z-50 glass-japanese border-b border-primary/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/logo.svg" alt="MokuSetu Group G.K. Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold tracking-wide text-secondary text-lg">MokuSetu Group G.K.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={navItemClass}>Home</a>
          <a href="#about" className={navItemClass}>About Us</a>
          <a href="#services" className={navItemClass}>Services</a>
          <a href="#vmv" className={navItemClass}>Vision & Mission</a>
          <a href="#usp" className={navItemClass}>Why Us</a>
          <a href="#blog" className={navItemClass}>Blog</a>
          <a href="#contact" className={navItemClass}>Contact</a>
          <Link href="/contact" className="btn-primary">Get Started</Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-secondary/20 hover:border-primary/30 transition-colors duration-300"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-secondary"
          >
            <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75z" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#home" className={navItemClass} onClick={() => setOpen(false)}>Home</a>
            <a href="#about" className={navItemClass} onClick={() => setOpen(false)}>About Us</a>
            <a href="#services" className={navItemClass} onClick={() => setOpen(false)}>Services</a>
            <a href="#vmv" className={navItemClass} onClick={() => setOpen(false)}>Vision & Mission</a>
            <a href="#usp" className={navItemClass} onClick={() => setOpen(false)}>Why Us</a>
            <a href="#blog" className={navItemClass} onClick={() => setOpen(false)}>Blog</a>
            <a href="#contact" className={navItemClass} onClick={() => setOpen(false)}>Contact</a>
            <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}


