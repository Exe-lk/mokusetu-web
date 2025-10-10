"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutPage() {
  const [storyRef1, isStoryVisible1] = useIntersectionObserver();
  const [storyRef2, isStoryVisible2] = useIntersectionObserver();
  const [storyRef3, isStoryVisible3] = useIntersectionObserver();
  const [storyRef4, isStoryVisible4] = useIntersectionObserver();
  const [missionRef, isMissionVisible] = useIntersectionObserver();
  const [valuesRef, isValuesVisible] = useIntersectionObserver();
  const [timelineRef, isTimelineVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();

  return (
    <>
      <Breadcrumb currentPage="About Us" currentPagePath="/about" />
      <PageHeader
        title="About Us"
        subtitle="Your trusted partner in bridging global business with Japan's dynamic market."
      />

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            <div className="space-y-12">
              {/* MokuSetu: Where Bridge Begins */}
              <div ref={storyRef1 as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl fade-in ${isStoryVisible1 ? 'visible' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
                  <span className="gradient-text-brand">MokuSetu: Where Bridge Begins</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed mb-4">
                  Words carry power. In Japanese, the term <em className="text-primary font-semibold">mokuteki</em> (目的) denotes purpose or objective — the sense of a clear aim. In Sanskrit, <em className="text-secondary font-semibold">setu</em> (सेतु) refers to a bridge, something that connects spaces and brings people together. Combining these two ideas, MokuSetu literally means "aim to bridge" and embodies a dedication to purposeful connection.
                </p>
              </div>

              {/* Bridging Cultures and Generations */}
              <div ref={storyRef2 as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl fade-in ${isStoryVisible2 ? 'visible' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  <span className="gradient-text-brand">Bridging Cultures and Generations</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  MokuSetu was founded on a simple yet ambitious belief: that intentional connections can transcend borders, disciplines, and generations. After years of working across different industries and cultures, our founders saw how easily communities become siloed. Artists and engineers rarely collaborate; local traditions fade as cities grow; people who could solve each other's problems never meet. The name MokuSetu serves as both a goal and a promise to address those divides.
                </p>
              </div>

              {/* Inspired by Purpose */}
              <div ref={storyRef3 as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl fade-in ${isStoryVisible3 ? 'visible' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  <span className="gradient-text-brand">Inspired by Purpose</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  Purpose (mokuteki) matters. Without a goal, bridges lead nowhere. We ask ourselves daily: What are we trying to achieve? Whether designing a community workspace, developing a digital platform, or curating a cross-cultural exhibition, we begin with a clear intention. That intention guides our choices and ensures our bridges are built to last.
                </p>
              </div>

              {/* Rooted in Connection */}
              <div ref={storyRef4 as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl fade-in ${isStoryVisible4 ? 'visible' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  <span className="gradient-text-brand">Rooted in Connection</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  A bridge (setu) is more than steel or stone. In the Sanskrit tradition, bridges often symbolize connection and transition. The mythological bridge of Setu Bandha, for example, linked mainland India to Lanka so Rama could rescue Sita—a story of unity against great odds. MokuSetu embraces this symbolism. We build pathways—literal and metaphorical—that allow people to cross divides, share experiences, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div ref={missionRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${isMissionVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Mission & Vision</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Driving international business success in Japan through cultural expertise and strategic partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`floating-paper p-8 rounded-3xl slide-in-left ${isMissionVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted leading-relaxed">
                    Our team connects businesses in Japan and worldwide by offering tailored solutions for market entry, sourcing, quality control, and project management. You get what you need, when you need it.                  </p>
                </div>
              </div>
            </div>

            <div className={`floating-paper p-8 rounded-3xl slide-in-right ${isMissionVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted leading-relaxed">
                    Serve as trusted bridge for business across borders enabling growth through integrity, clear communication and cultural understandings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 mt-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Brand Archetype: The Caretaker</span>
            </h2>
          </div>

          {/* Brand Archetype - Centered */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className={`floating-paper p-8 rounded-3xl scale-in ${isMissionVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <p className="text-muted leading-relaxed">
                    At MokuSetu, we act as The Caretaker — a trusted partner who nurtures every business relationship with empathy, accountability, and foresight. We ensure that every connection is meaningful and every outcome sustainable, reflecting our belief that true growth comes from mutual trust and understanding.
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
          <div ref={valuesRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${isValuesVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-brand">Our Core Values</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              The principles that guide every decision and partnership we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`floating-paper p-6 rounded-2xl scale-in ${isValuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="flex flex-col items-center text-center">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Honesty & Transparency</h4>
                <p className="text-muted text-sm">We believe integrity is the foundation of every successful partnership.
                  At MokuSetu, we communicate openly, set clear expectations, and act with sincerity in every interaction. Transparency builds trust and trust drives long-term collaboration.
                </p>
              </div>
            </div>

            <div className={`floating-paper p-6 rounded-2xl scale-in ${isValuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex flex-col items-center text-center">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Respect Across Cultures</h4>
                <p className="text-muted text-sm">Cultural understanding is at the heart of what we do.
                  We value every perspective and approach each partnership with humility and sensitivity to local customs. By respecting cultural differences, we create harmony that strengthens global business relationships.</p>
              </div>
            </div>

            <div className={`floating-paper p-6 rounded-2xl scale-in ${isValuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="flex flex-col items-center text-center">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Collaboration for Mutual Growth</h4>
                <p className="text-muted text-sm">We grow when our clients grow.
                  Our approach centers on teamwork and shared success, working side by side with partners to create strategies and solutions that benefit everyone involved.
                </p>
              </div>
            </div>

            <div className={`floating-paper p-6 rounded-2xl scale-in ${isValuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex flex-col items-center text-center">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Building Trust Across Borders</h4>
                <p className="text-muted text-sm">Trust is not given; it is earned through consistency and reliability.
                  We ensure that every promise made is a promise kept, fostering confidence between Japan and international markets through dependable performance and ethical practice.</p>
              </div>
            </div>

            <div className={`floating-paper p-6 rounded-2xl scale-in ${isValuesVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="flex flex-col items-center text-center">
                <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Strong Partnerships, Lasting Impact</h4>
                <p className="text-muted text-sm">Our goal is not short-term gains but enduring value.
                  We nurture relationships that stand the test of time, delivering meaningful results that extend beyond projects and create partnerships that shape the future of cross-border business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div ref={timelineRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${isTimelineVisible ? 'visible' : ''}`}>
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
              <div className={`relative flex items-center slide-in-left ${isTimelineVisible ? 'visible' : ''}`}>
                <div className="w-1/2 pr-8 text-right">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2025 July - Foundation</h3>
                    <p className="text-muted">MokuSetu Group G.K. was established with a vision to bridge international businesses with Japan's market.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className={`relative flex items-center slide-in-right ${isTimelineVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="floating-paper p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-foreground mb-2">2025 August - Expansion</h3>
                    <p className="text-muted">First collaboration established with TQ Cert, strengthening industry credibility and expanding opportunities.</p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-6">
          <div ref={ctaRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-12 rounded-3xl text-center max-w-4xl mx-auto scale-in ${isCtaVisible ? 'visible' : ''}`}>
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
