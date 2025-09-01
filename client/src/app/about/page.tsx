import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb currentPage="About Us" currentPagePath="/about" />
      <PageHeader 
        title="About Us" 
        subtitle="Your trusted partner in bridging global business with Japan's dynamic market."
      />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-accent/5 via-white to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="gradient-text-brand">Our Story</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                MokuSetu Group G.K. was founded with a clear mission: to bridge the gap between international businesses and Japan's unique market landscape. We understand that success in Japan requires more than just business acumen—it demands cultural sensitivity, local expertise, and proven execution strategies.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                With over 15 years of experience and a network spanning 25+ countries, we've helped hundreds of companies navigate the complexities of the Japanese market, from initial market entry to sustainable growth and expansion.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                  <div className="text-sm text-muted">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">500+</div>
                  <div className="text-sm text-muted">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="floating-paper p-8 rounded-3xl">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Mission & Vision</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Driving international business success in Japan through cultural expertise and strategic partnerships
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="floating-paper p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted leading-relaxed">
                    To empower international businesses with the knowledge, connections, and execution capabilities needed to thrive in Japan's dynamic market, while fostering sustainable partnerships that benefit all stakeholders.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-success rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted leading-relaxed">
                    To become the most trusted bridge between global businesses and Japan, creating a world where cultural barriers are transformed into competitive advantages and mutual growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Core Values</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              The principles that guide every decision and partnership we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="floating-paper p-6 rounded-2xl group hover-lift">
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

            <div className="floating-paper p-6 rounded-2xl group hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-success rounded-xl flex items-center justify-center flex-shrink-0">
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

            <div className="floating-paper p-6 rounded-2xl group hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-primary rounded-xl flex items-center justify-center flex-shrink-0">
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

            <div className="floating-paper p-6 rounded-2xl group hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Trust & Integrity</h4>
                  <p className="text-muted text-sm">Building lasting relationships based on transparency, honesty, and mutual respect in all our business dealings.</p>
                </div>
              </div>
            </div>

            <div className="floating-paper p-6 rounded-2xl group hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
                  <p className="text-muted text-sm">Continuously evolving our approach to meet the changing needs of global businesses in Japan's dynamic market.</p>
                </div>
              </div>
            </div>

            <div className="floating-paper p-6 rounded-2xl group hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Global Perspective</h4>
                  <p className="text-muted text-sm">Combining international business insights with deep local knowledge to create comprehensive solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Journey</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Key milestones in our mission to bridge global business with Japan
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2008 - Foundation</h3>
                    <p className="text-muted">MokuSetu Group G.K. was established with a vision to bridge international businesses with Japan's market.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2013 - Expansion</h3>
                    <p className="text-muted">Expanded services to cover 15+ countries and established key partnerships across Asia-Pacific.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2018 - Digital Transformation</h3>
                    <p className="text-muted">Launched digital platforms and tools to enhance our service delivery and client communication.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-success rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2023 - Global Leadership</h3>
                    <p className="text-muted">Became the leading consultancy for international businesses entering the Japanese market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Leadership Team</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Meet the experts who drive our success and guide our clients to victory in Japan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="floating-paper p-6 rounded-2xl text-center group hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Takashi Yamamoto</h3>
              <p className="text-secondary font-medium mb-3">CEO & Founder</p>
              <p className="text-muted text-sm">15+ years of experience in international business development and Japanese market entry strategies.</p>
            </div>
            
            <div className="floating-paper p-6 rounded-2xl text-center group hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-secondary to-success rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Sarah Chen</h3>
              <p className="text-secondary font-medium mb-3">Head of Operations</p>
              <p className="text-muted text-sm">Expert in cross-cultural business operations and strategic partnership development across Asia-Pacific.</p>
            </div>
            
            <div className="floating-paper p-6 rounded-2xl text-center group hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-success to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Kenji Tanaka</h3>
              <p className="text-secondary font-medium mb-3">Director of Strategy</p>
              <p className="text-muted text-sm">Specialist in Japanese market analysis and international business strategy with deep regulatory knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div className="floating-paper p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="gradient-text-brand">Ready to Start Your Journey?</span>
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise and network can help your business succeed in Japan's dynamic market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Get Started Today</a>
              <a href="/services" className="btn-secondary">Explore Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
