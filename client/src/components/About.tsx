"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="about" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Story */}
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="floating-paper p-8 rounded-3xl group hover:bg-gradient-to-r hover:from-secondary hover:to-success transition-all duration-300 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4">Empowering Cross-Border Growth
              </h3>
              <p className="text-muted leading-relaxed mb-4">
              Founded in Japan, MokuSetu Group serves as a trusted partner for international businesses entering or expanding within the Japanese market.
              </p>
              <p className="text-muted leading-relaxed mb-4">
              We combine local expertise with global perspective—bridging not only language, but culture, regulation, and business practice—to ensure your operations thrive with precision and trust.
              </p>
              <div className="mt-8 pt-6 border-t border-accent/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted mb-3">Want to learn more about our company?</p>
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-primary/20 text-primary hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:border-secondary rounded-xl transition-all duration-300 font-medium group shadow-sm hover:shadow-md hover:scale-105"
                  >
                    <span className="group-hover:text-white transition-colors duration-300">Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Key Strengths */}
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="grid gap-6">
              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Cultural Expertise</h4>
                    <p className="text-muted text-sm">Deep understanding of Japanese business culture, etiquette, and communication styles that drive successful partnerships.</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Local Network</h4>
                    <p className="text-muted text-sm">Extensive connections with Japanese suppliers, partners, and regulatory bodies across diverse industries.</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Proven Results</h4>
                    <p className="text-muted text-sm">Track record of successful market entries, partnerships, and business expansions with measurable outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
