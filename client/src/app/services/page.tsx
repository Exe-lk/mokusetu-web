import Services from "@/components/Services";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb currentPage="Services" currentPagePath="/services" />
      <Services />
    </>
  );
}
