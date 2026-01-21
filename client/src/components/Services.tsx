"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchServices } from "@/app/store/slices/servicesSlice";
import type { Service } from "@/app/service/services.service";


const getIconBySlug = (slug: string): string => {
  const iconMap: Record<string, string> = {
    "sales-representative-support": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    "quality-inspection-services": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    "recruitment": "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
  };
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (slug.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(slug.toLowerCase())) {
      return icon;
    }
  }
  
  return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
};

const getRouteFromSlug = (slug: string): string => {
  const slugMap: Record<string, string> = {
    "quality-inspection-services": "/services/quality-inspection",
    "sales-representative-support": "/services/sales-representation",
  };
  
  return slugMap[slug] || `/services/${slug}`;
};

export default function Services() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const dispatch = useAppDispatch();
  const { services, loading } = useAppSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices(true));
  }, [dispatch]);

  const activeServices = services
    .filter((service: Service) => service.active)
    .sort((a: Service, b: Service) => (a.order || 0) - (b.order || 0));

  return (
    <section id="services" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">Our Services</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            End-to-end support across strategy, sourcing, quality, and execution.
          </p>
        </div>
        
        <div className="section-divider mb-12"></div>
        
        <div className="flex justify-center">
          {loading ? (
            <div className="text-center py-12">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="text-gray-500 mt-4">Loading services...</p>
            </div>
          ) : activeServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              {activeServices.map((service: Service, index: number) => {
                const gradientClass = index === 0 
                  ? "hover:from-primary hover:to-secondary"
                  : index === 1
                  ? "hover:from-secondary hover:to-success"
                  : "hover:from-success hover:to-primary";
                
                const icon = getIconBySlug(service.slug);
                const href = getRouteFromSlug(service.slug);
                
                return (
                  <div 
                    key={service.id} 
                    className={`floating-paper p-8 rounded-3xl scale-in ${sectionVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {service.pageTitle}
                      </h3>
                      <p className="text-muted leading-relaxed mb-6 flex-grow">
                        {service.pageSubtitle || ""}
                      </p>
                      <div className="mt-auto">
                        <Link 
                          href={href}
                          className="btn-secondary inline-flex items-center gap-3 group"
                        >
                          <span>Learn More</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


