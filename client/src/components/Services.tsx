"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Service = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const services: Service[] = [
  {
    title: "Market Entry & Business Development",
    description:
      "Research-driven entry strategies, localization, and partner development to establish and scale in Japan.",
    icon: "M3 21l9-9-9-9v18z",
    color: "from-primary to-primary-light"
  },
  {
    title: "Supplier Sourcing & Procurement",
    description:
      "Connect with trusted Japanese and global suppliers while optimizing cost, quality, and timelines.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "from-secondary to-secondary-light"
  },
  {
    title: "Quality Inspection & Compliance",
    description:
      "On-site inspections and audits to meet international standards and ensure product reliability.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-success to-emerald-400"
  },
  {
    title: "Regulatory & Cultural Advisory",
    description:
      "Navigate Japan's regulatory environment and bridge cultural and communication differences.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-warning to-orange-400"
  },
];

export default function Services() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="services" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">Core Services</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            End-to-end support across strategy, sourcing, quality, and execution.
          </p>
        </div>
        
        {/* Modern Section Divider */}
        <div className="section-divider mb-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`floating-paper p-8 rounded-3xl group hover-lift service-card-unique ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


