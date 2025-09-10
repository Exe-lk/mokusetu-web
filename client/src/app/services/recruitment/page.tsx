import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function RecruitmentPage() {
  return (
    <>
      <Breadcrumb 
        currentPage="Recruitment" 
        currentPagePath="/services/recruitment"
        parentPage="Services"
        parentPagePath="/services"
      />
      <PageHeader 
        title="Recruitment Services" 
        subtitle="Find the right talent for your business with our comprehensive recruitment solutions."
      />
      
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Talent Sourcing</h3>
                <p className="text-muted leading-relaxed">
                  We identify and source top talent across various industries, using our extensive network and proven recruitment strategies.
                </p>
              </div>
              
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-success rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Candidate Screening</h3>
                <p className="text-muted leading-relaxed">
                  Comprehensive screening and assessment processes to ensure candidates meet your specific requirements and cultural fit.
                </p>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text-brand">Our Recruitment Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Recruitment Process</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Job requirement analysis</li>
                    <li>• Candidate sourcing and screening</li>
                    <li>• Interview coordination</li>
                    <li>• Reference checks and background verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Specializations</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Executive and senior management</li>
                    <li>• Technical and IT professionals</li>
                    <li>• Sales and marketing specialists</li>
                    <li>• Multilingual candidates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Recruitment Services?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Extensive Network</h4>
                  <p className="text-sm text-muted">Access to a wide pool of qualified candidates across various industries.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-sm text-muted">Rigorous screening process to ensure only the best candidates are presented.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Quick Turnaround</h4>
                  <p className="text-sm text-muted">Efficient processes to fill positions quickly without compromising quality.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold">Looking for the right talent?</h3>
                <p className="text-muted">Let us help you find the perfect candidates for your business needs.</p>
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Start Recruiting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
