"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function USP() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="usp" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">Unique Advantage</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            Bridging cultures, delivering results — your on-the-ground partner for Japan market success.
          </p>
        </div>
        
        {/* Unique Section Divider */}
        <div className="section-divider mb-12"></div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">Cultural fluency</h3>
            <p className="text-muted group-hover:text-white transition-colors duration-300">Operate effectively across Japanese and international contexts with deep cultural understanding and local expertise.</p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-secondary hover:to-success transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`} style={{ transitionDelay: '0.1s' }}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">Technical & commercial depth</h3>
            <p className="text-muted group-hover:text-white transition-colors duration-300">From supplier audits to strategic partnerships and sales enablement with comprehensive expertise.</p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-success hover:to-primary transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">Trusted local network</h3>
            <p className="text-muted group-hover:text-white transition-colors duration-300">Direct access to verified partners and on-the-ground execution capabilities across Japan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


