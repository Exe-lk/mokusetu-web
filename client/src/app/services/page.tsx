import Services from "@/components/Services";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb currentPage="Services" currentPagePath="/services" />
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end support across strategy, sourcing, quality, and execution."
      />
      <Services />
    </>
  );
}
