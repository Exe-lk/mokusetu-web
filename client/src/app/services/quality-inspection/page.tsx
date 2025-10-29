"use client";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function QualityInspectionPage() {
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();
  const [servicesRef, isServicesVisible] = useIntersectionObserver();
  const [whyUsRef, isWhyUsVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();
  
  return (
    <>
      <Breadcrumb 
        currentPage="Quality Inspection" 
        currentPagePath="/services/quality-inspection"
        parentPage="Services"
        parentPagePath="/services"
      />
      <PageHeader 
        title="Quality Inspection Services" 
        subtitle="Comprehensive QA/QC and inspection services to ensure the highest standards of safety, reliability, and compliance."
        backgroundImage="/assests/quality 1.jpg"
      />
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 fade-in ${isContentVisible ? 'visible' : ''}`}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                At MokuSetu Group, we specialize in delivering comprehensive QA/QC and inspection services to ensure every project meets the highest standards of safety, reliability, and compliance. Our expertise covers third-party inspection, vendor audits, NDT/coating inspections, site QA/QC, expediting, and Japanese documentation support, enabling international companies to execute projects in Japan with confidence and precision.
              </p>
              
              <p className="text-lg text-muted leading-relaxed mb-6">
                To strengthen this capability further, we're pleased to announce collaboration between MokuSetu Group G.K. (Japan) and TQ Cert Services Private Limited (India), A Tata Enterprise, to support projects across Infrastructure, Oil & Gas, Petrochemical, Chemical, Power Generation, and General Industries in Japan.
              </p>
              
              <p className="text-lg text-muted leading-relaxed mb-6">
                This partnership brings together the global assurance experience of TQ Cert – Assurance Services Business and the local market knowledge of MokuSetu Group, utilizing each other's resources and credentials to deliver high-quality inspection and compliance solutions tailored to the Japanese market.
              </p>
              
              <p className="text-lg text-muted leading-relaxed">
                By uniting international certifications with Japanese operational expertise, we provide clients with a trusted pathway to achieve excellence in project execution.
              </p>
            </div>

            <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`floating-paper p-8 rounded-3xl flex flex-col items-center text-center h-full slide-in-left ${isCardsVisible ? 'visible' : ''}`}>
              <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-muted leading-relaxed">
                  Comprehensive QA/QC services ensuring every project meets international standards of safety, reliability, and compliance.
                </p>
              </div>
              
              <div className={`floating-paper p-8 rounded-3xl flex flex-col items-center text-center h-full slide-in-right ${isCardsVisible ? 'visible' : ''}`}>
              <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Partnership</h3>
                <p className="text-muted leading-relaxed">
                  Strategic collaboration with TQ Cert Services (Tata Enterprise) bringing international certifications and Japanese operational expertise together.
                </p>
              </div>
            </div>
            
            <div ref={servicesRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 h-full scale-in ${isServicesVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl font-bold mb-6 gradient-text-brand text-center">Our Quality Inspection Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:pr-4">
                  <h4 className="text-xl font-semibold mb-3 text-left">Inspection Services</h4>
                  <ul className="space-y-2 text-muted text-left pl-4">
                    <li>• Third-party inspection</li>
                    <li>• Vendor audits</li>
                    <li>• NDT/coating inspections</li>
                    <li>• Site QA/QC</li>
                    <li>• Expediting services</li>
                  </ul>
                </div>
                <div className="md:pl-4">
                  <h4 className="text-xl font-semibold mb-3 text-left">Industry Coverage</h4>
                  <ul className="space-y-2 text-muted text-left pl-4">
                    <li>• Infrastructure</li>
                    <li>• Oil & Gas</li>
                    <li>• Petrochemical</li>
                    <li>• Chemical</li>
                    <li>• Power Generation</li>
                    <li>• General Industries</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div ref={whyUsRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 fade-in ${isWhyUsVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl font-bold mb-4 text-center mb-12">Why Choose Our Quality Services?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">International Standards</h4>
                  <p className="text-sm text-muted">Adherence to global quality standards and certifications.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Local Expertise</h4>
                  <p className="text-sm text-muted">Deep understanding of Japanese market requirements and documentation.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Trusted Partnership</h4>
                  <p className="text-sm text-muted">Collaboration with Tata Enterprise ensuring reliable quality assurance.</p>
                </div>
              </div>
            </div>
            
            <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="text-center">
              <div className={`inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md scale-in ${isCtaVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold">Need quality inspection services?</h3>
                <p className="text-muted">Our experts are ready to ensure your project meets the highest standards.</p>
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
