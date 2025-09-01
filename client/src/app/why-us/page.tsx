import USP from "@/components/USP";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function WhyUsPage() {
  return (
    <>
      <Breadcrumb currentPage="Why Us" currentPagePath="/why-us" />
      <PageHeader 
        title="Why Choose Us" 
        subtitle="Discover the unique advantages that make us your ideal partner for Japan market entry."
      />
      <USP />
    </>
  );
}
