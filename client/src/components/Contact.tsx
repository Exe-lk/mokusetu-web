"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Contact() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`contact-card-unique p-12 rounded-3xl relative overflow-hidden hover-lift ${sectionVisible ? 'scale-in visible' : 'scale-in'}`}>
            {/* Unique Japanese Corporate Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/20"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl floating"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <div className="icon-container-unique w-20 h-20 mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text-brand">Let's Build the Bridge</span>
              </h2>
              
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Tell us about your goals in Japan. We'll respond within 1–2 business days with a personalized strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@mokusetu.com?subject=Inquiry%20-%20MokuSetu%20Group%20G.K."
                  className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="#services"
                  className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


