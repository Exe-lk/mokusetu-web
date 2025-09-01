"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="about" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">About Us</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            Your trusted partner in bridging global business with Japan's dynamic market.
          </p>
        </div>
        
        {/* Modern Section Divider */}
        <div className="section-divider mb-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Story */}
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="floating-paper p-8 rounded-3xl group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300">Our Story</h3>
              <p className="text-muted leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                MokuSetu Group G.K. was founded with a clear mission: to bridge the gap between international businesses and Japan's unique market landscape. We understand that success in Japan requires more than just business acumen—it demands cultural sensitivity, local expertise, and proven execution strategies.
              </p>
              <p className="text-muted leading-relaxed group-hover:text-white transition-colors duration-300">
                With over 15 years of experience and a network spanning 25+ countries, we've helped hundreds of companies navigate the complexities of the Japanese market, from initial market entry to sustainable growth and expansion.
              </p>
            </div>
          </div>

          {/* Right Column - Key Strengths */}
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="grid gap-6">
              <div className="floating-paper p-6 rounded-2xl group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-white transition-colors duration-300">Cultural Expertise</h4>
                    <p className="text-muted text-sm group-hover:text-white transition-colors duration-300">Deep understanding of Japanese business culture, etiquette, and communication styles that drive successful partnerships.</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group hover:bg-gradient-to-r hover:from-secondary hover:to-success transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-success rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-white transition-colors duration-300">Local Network</h4>
                    <p className="text-muted text-sm group-hover:text-white transition-colors duration-300">Extensive connections with Japanese suppliers, partners, and regulatory bodies across diverse industries.</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group hover:bg-gradient-to-r hover:from-success hover:to-primary transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-success to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-white transition-colors duration-300">Proven Results</h4>
                    <p className="text-muted text-sm group-hover:text-white transition-colors duration-300">Track record of successful market entries, partnerships, and business expansions with measurable outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mission Statement */}
        <div className={`mt-16 text-center ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="floating-paper p-8 rounded-3xl max-w-4xl mx-auto group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300">Our Mission</h3>
            <p className="text-lg text-muted leading-relaxed group-hover:text-white transition-colors duration-300">
              To empower international businesses with the knowledge, connections, and execution capabilities needed to thrive in Japan's dynamic market, while fostering sustainable partnerships that benefit all stakeholders.
            </p>
            
            {/* Enhanced View Full Page Link - Fixed Gradient */}
            <div className="mt-8 pt-6 border-t border-accent/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted mb-3 group-hover:text-white transition-colors duration-300">Want to learn more about our company?</p>
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30 rounded-xl transition-all duration-300 font-medium group shadow-sm hover:shadow-md"
                  >
                    <span>View Full About Page</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
