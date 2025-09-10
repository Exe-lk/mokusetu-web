"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function PrivacyPolicy() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section className="section py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`floating-paper p-12 rounded-3xl relative overflow-hidden ${sectionVisible ? 'scale-in visible' : 'scale-in'}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/20"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl floating"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <div className="icon-container-unique w-20 h-20 mx-auto mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="gradient-text-brand">Privacy Policy & Terms</span>
                </h1>
                <p className="text-xl text-muted">
                  Last updated: September 08, 2025
                </p>
              </div>

              <div className="space-y-12 text-left">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                  </div>
                  
                  <section>
                    <p className="text-muted leading-relaxed mb-6">
                      MokuSetu Group ("MokuSetu," "we," "our," or "us") values your privacy. This policy explains how we collect, use, and protect your information when you use our website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Information We Collect</h3>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Name</li>
                      <li>Company name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                    </ul>
                    <p className="text-muted leading-relaxed mt-4">
                      We do not collect information from minors (under 16 under GDPR / as defined by APPI).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">How We Use Your Information</h3>
                    <p className="text-muted leading-relaxed mb-4">We use your data to:</p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Respond to inquiries</li>
                      <li>Provide services (market entry, supplier sourcing, quality inspections, regulatory & cultural advisory)</li>
                      <li>Connect businesses with opportunities in Japan</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Sharing of Information</h3>
                    <p className="text-muted leading-relaxed mb-4">We only share data when necessary to:</p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                      <li>Work with trusted suppliers or partners to deliver services</li>
                      <li>Comply with legal obligations</li>
                      <li>Protect our rights or users' rights</li>
                    </ul>
                    <p className="text-muted leading-relaxed mt-4 font-semibold">
                      We do not sell or rent your personal data.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Cookies</h3>
                    <p className="text-muted leading-relaxed">
                      We use cookies for analytics. A bilingual cookie banner allows you to accept, reject, or manage preferences.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Your Rights</h3>
                    <p className="text-muted leading-relaxed">
                      You can request access, correction, or deletion of your data via our bilingual contact form.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Updates</h3>
                    <p className="text-muted leading-relaxed">
                      We will post changes to this policy on the website in both Japanese and English.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Contact</h3>
                    <p className="text-muted leading-relaxed">
                      For privacy-related questions, please contact us via the website's contact form.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
