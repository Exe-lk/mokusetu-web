import TermsAndConditions from "@/components/TermsAndConditions";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms and Conditions - MokuSetu Group G.K.",
  description: "Learn how MokuSetu Group G.K. collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Breadcrumb currentPage="Terms and Conditions" currentPagePath="/terms-and-conditions" />
      <PageHeader 
        title="Terms and Conditions" 
        subtitle="Learn how MokuSetu Group G.K. collects, uses, and protects your personal information. Our commitment to your privacy and data security."
      />
      <TermsAndConditions />
    </>
  );
}
