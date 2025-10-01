"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const navItemClass = "text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-300";

  // Function to handle navigation to home page sections
  const navigateToSection = (sectionId: string) => {
    if (pathname === '/') {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home page with the section
      router.push(`/#${sectionId}`);
    }
    setOpen(false); // Close mobile menu
  };

  // Handle hash navigation when component mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 glass-japanese border-b border-primary/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigateToSection('home')} className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/logo.svg" alt="MokuSetu Group G.K. Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold tracking-wide text-secondary text-lg">MokuSetu Group G.K.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigateToSection('home')} className={navItemClass}>Home</button>
          <button onClick={() => navigateToSection('about')} className={navItemClass}>About Us</button>
          <div className="relative" ref={servicesDropdownRef}>
            <button
              className={`${navItemClass} flex items-center gap-1`}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-primary/20 rounded-lg shadow-lg py-2 z-50"
              >
                <Link href="/services" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors">
                  All Services
                </Link>
                <div className="border-t border-primary/10 my-1"></div>
                <Link href="/services/sales-representation" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors">
                  Sales & Representative  Support
                </Link>
                {/* <Link href="/services/recruitment" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors">
                  Recruitment
                </Link> */}
                <Link href="/services/quality-inspection" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors">
                  Quality Inspection
                </Link>
              </div>
            )}
          </div>
          <button onClick={() => navigateToSection('blog')} className={navItemClass}>Blog</button>
          <button onClick={() => navigateToSection('contact')} className={navItemClass}>Contact</button>
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
            <button onClick={() => navigateToSection('home')} className={navItemClass}>Home</button>
            <button onClick={() => navigateToSection('about')} className={navItemClass}>About Us</button>
            <div className="flex flex-col gap-2">
              <button
                className={`${navItemClass} flex items-center justify-between`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  <Link href="/services" className="text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    All Services
                  </Link>
                  <Link href="/services/sales-representation" className="text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    Sales & Representative  Support
                  </Link>
                  {/* <Link href="/services/recruitment" className="text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    Recruitment
                  </Link> */}
                </div>
              )}
            </div>
            <button onClick={() => navigateToSection('blog')} className={navItemClass}>Blog</button>
            <button onClick={() => navigateToSection('contact')} className={navItemClass}>Contact</button>
            <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}


