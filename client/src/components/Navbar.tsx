"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchServices } from "@/app/store/slices/servicesSlice";
import type { Service } from "@/app/service/services.service";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const navItemClass = "text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-300";
  
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.services);

  useEffect(() => {
    // Fetch active services for navbar
    dispatch(fetchServices(true));
  }, [dispatch]);

  // Filter active services and sort by order
  const activeServices = services
    .filter((service: Service) => service.active)
    .sort((a: Service, b: Service) => (a.order || 0) - (b.order || 0));

  // Helper function to convert slug to route path
  const getRouteFromSlug = (slug: string): string => {
    const slugMap: Record<string, string> = {
      "quality-inspection-services": "/services/quality-inspection",
      "sales-representative-support": "/services/sales-representation",
    };
    return slugMap[slug] || `/services/${slug}`;
  };

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
      {/* Top Bar */}
      <div className="bg-[#1D3557] border-b border-primary/10">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between text-sm text-white">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@mokusetu.com</span>
              <span className="text-white">|</span>
              <a href="https://www.linkedin.com/company/mokusetu-group" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/assests/Logo on White.png" alt="MokuSetu Group G.K. Logo" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wide text-secondary text-lg">MokuSetu Group G.K.</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-18 flex-1 justify-end">
          <Link href="/" className={navItemClass}>Home</Link>
          <Link href="/about" className={navItemClass}>About Us</Link>
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
                <Link 
                  href="/services/all-services" 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  All Services
                </Link>
                {activeServices.length > 0 && (
                  <>
                    <div className="border-t border-primary/10 my-1"></div>
                    {activeServices.map((service: Service) => (
                      <Link
                        key={service.id}
                        href={getRouteFromSlug(service.slug)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.pageTitle}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
          <Link href="/blog" className={navItemClass}>Blog</Link>
          <Link href="/contact" className={navItemClass}>Contact</Link>
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
            <Link href="/" className={navItemClass} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className={navItemClass} onClick={() => setOpen(false)}>About Us</Link>
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
                  <Link 
                    href="/services/all-services" 
                    className="text-sm text-foreground/80 hover:text-primary transition-colors" 
                    onClick={() => setOpen(false)}
                  >
                    All Services
                  </Link>
                  {activeServices.map((service: Service) => (
                    <Link
                      key={service.id}
                      href={getRouteFromSlug(service.slug)}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {service.pageTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className={navItemClass} onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" className={navItemClass} onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


