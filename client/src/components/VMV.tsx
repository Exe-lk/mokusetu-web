"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function VMV() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="vmv" className="section section-secondary" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 text-accent ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-primary">Our Foundation</span>
          </h2>
          <p className={`text-xl text-accent/90 max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            Built on trust, integrity, and cultural understanding
          </p>
        </div>
        
        {/* Unique Section Divider */}
        <div className="section-divider mb-12 opacity-30"></div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift ${sectionVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted leading-relaxed">
              To serve as a trusted bridge for cross-border business, enabling growth through integrity, communication, and cultural understanding.
            </p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-secondary hover:to-success transition-all duration-300 hover-lift ${sectionVisible ? 'scale-in visible' : 'scale-in'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted leading-relaxed">
              To connect businesses worldwide with Japan by offering tailored solutions in market entry, sourcing, quality control, and project management.
            </p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group hover:bg-gradient-to-r hover:from-success hover:to-primary transition-all duration-300 hover-lift ${sectionVisible ? 'slide-in-right visible' : 'slide-in-right'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="icon-container-unique w-20 h-20 mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Core Values</h3>
            <ul className="text-muted space-y-3 text-left">
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">Honesty & transparency</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">Respect across cultures</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">Collaboration for growth</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">Trust-building</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">Long-lasting partnerships</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="floating-paper p-8 rounded-3xl max-w-4xl mx-auto group">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-muted mb-6">
              Let's discuss how our vision and mission can align with your business goals in Japan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">Get Started</a>
              <a 
                href="/vision-mission" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-secondary/20 text-secondary rounded-xl font-medium group shadow-sm"
              >
                <span>View Full Page</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


