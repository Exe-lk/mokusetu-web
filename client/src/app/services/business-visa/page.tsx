import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function BusinessVisaPage() {
  return (
    <>
      <Breadcrumb 
        currentPage="Business Visa Support" 
        currentPagePath="/services/business-visa"
        parentPage="Services"
        parentPagePath="/services"
      />
      <PageHeader 
        title="Business Visa Support" 
        subtitle="Expert assistance with business visa applications and immigration services for Japan."
      />
      
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Visa Application</h3>
                <p className="text-muted leading-relaxed">
                  Complete support for business visa applications, including document preparation, submission, and follow-up with immigration authorities.
                </p>
              </div>
              
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-success rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Fast Processing</h3>
                <p className="text-muted leading-relaxed">
                  Expedited processing services to ensure your business visa is approved quickly and efficiently, minimizing delays in your business operations.
                </p>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text-brand">Our Business Visa Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Visa Types</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Business Manager Visa</li>
                    <li>• Investor/Business Manager Visa</li>
                    <li>• Intra-company Transferee Visa</li>
                    <li>• Highly Skilled Professional Visa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Support Services</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Document preparation and review</li>
                    <li>• Application submission</li>
                    <li>• Status tracking and updates</li>
                    <li>• Renewal and extension services</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Visa Services?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Expert Knowledge</h4>
                  <p className="text-sm text-muted">Deep understanding of Japanese immigration laws and requirements.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Fast Turnaround</h4>
                  <p className="text-sm text-muted">Quick processing times to get your visa approved efficiently.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm text-muted">Continuous assistance throughout the entire visa process.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold">Need help with your business visa?</h3>
                <p className="text-muted">Our experts are ready to guide you through the entire process.</p>
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Start Your Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
