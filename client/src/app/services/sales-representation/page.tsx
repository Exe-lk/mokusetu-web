import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function SalesRepresentationPage() {
  return (
    <>
      <Breadcrumb 
        currentPage="Sales & Representation Support" 
        currentPagePath="/services/sales-representation"
        parentPage="Services"
        parentPagePath="/services"
      />
      <PageHeader 
        title="Sales & Representation Support" 
        subtitle="Comprehensive sales and representation services to help your business thrive in the Japanese market."
      />
      
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Local Representation</h3>
                <p className="text-muted leading-relaxed">
                  We act as your local representative in Japan, handling client meetings, negotiations, and business development activities on your behalf.
                </p>
              </div>
              
              <div className="floating-paper p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-success rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sales Strategy</h3>
                <p className="text-muted leading-relaxed">
                  Develop and implement effective sales strategies tailored to the Japanese market, including pricing, positioning, and market penetration.
                </p>
              </div>
            </div>
            
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text-brand">Our Sales & Representation Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Business Development</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Market research and analysis</li>
                    <li>• Lead generation and qualification</li>
                    <li>• Partnership development</li>
                    <li>• Client relationship management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Sales Support</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Sales presentations and demos</li>
                    <li>• Contract negotiations</li>
                    <li>• After-sales support</li>
                    <li>• Customer success management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold">Ready to expand your sales in Japan?</h3>
                <p className="text-muted">Let us help you establish a strong presence in the Japanese market.</p>
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
