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
            <div className="floating-paper p-8 rounded-3xl mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted leading-relaxed mb-6">
                  At MokuSetu Group, sales and representative support is more than just making introductions; it's about standing alongside you as a partner as you build a presence in Japan. We believe that navigating a new market is easier when you have someone on the ground who understands your business and shares your goals. That's why we take the time to learn what you do and what success looks like for you before we do anything else.
                </p>
                
                <p className="text-lg text-muted leading-relaxed mb-6">
                  From there, we act as your local representative, opening doors, meeting prospects, and speaking on your behalf in a way that reflects your values. Because we live and work in Japan, we can bridge language and cultural gaps, negotiate terms, and ensure that your story comes across clearly. We monitor every opportunity and keep you informed, so you always have a clear view of progress and next steps.
                </p>
                
                <p className="text-lg text-muted leading-relaxed">
                  Our mission is to build long‑term partnerships. We don't disappear after the first deal closes; we stay involved to make sure customer relationships grow and that any regulatory or logistical hurdles are handled efficiently. With MokuSetu Group as your sales and representative partner, you gain a committed ally who is invested in your success and dedicated to helping you achieve your goals in Japan.
                </p>
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
