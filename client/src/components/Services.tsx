"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  comingSoon?: boolean;
};

const services: Service[] = [
  {
    title: "Sales & Representative Support",
    description:
      "Your trusted local business partner in Japan.We represent your brand, build lasting client relationships, and help you expand with confidence and cultural precision.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-primary to-primary-light",
    href: "/services/sales-representation"
  },
  {
     title: "Recruitment Support Support",
    description:
      "Building your Japan team made easier.Our upcoming recruitment service connects you with bilingual and local professionals who understand both your culture and Japan's business environment.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
    color: "from-success to-emerald-400",
    href: "/services/recruitment",
    comingSoon: true
   },
  {
    title: "Quality Inspection",
    description:
      "Ensure your products meet the highest standards with our comprehensive quality inspection services.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-primary to-primary-light",
    href: "/services/quality-inspection"
  },
];

export default function Services() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
            {services.map((service, index) => {
              const gradientClass = index === 0 
                ? "hover:from-primary hover:to-secondary"
                : index === 1
                ? "hover:from-secondary hover:to-success"
                : "hover:from-success hover:to-primary";
              
              return (
                <div 
                  key={service.title} 
                  className={`floating-paper p-8 rounded-3xl group hover:bg-gradient-to-r ${gradientClass} transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    {service.comingSoon ? (
                      <div className="mt-auto">
                        <span className="inline-block px-6 py-2 bg-gray-300 text-gray-600 rounded-full font-semibold text-sm cursor-not-allowed">
                          Coming Soon
                        </span>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <Link 
                          href={service.href}
                          className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg"
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


