import PrivacyPolicy from "@/components/PrivacyPolicy";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy - MokuSetu Group G.K.",
  description: "Learn how MokuSetu Group G.K. collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb currentPage="Privacy Policy" currentPagePath="/privacy-policy" />
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Your privacy matters to us. Learn how we protect and handle your information."
      />
      <PrivacyPolicy />
    </>
  );
}
