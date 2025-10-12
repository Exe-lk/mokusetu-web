import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb currentPage="Contact" currentPagePath="/contact" />
      <PageHeader 
        title="Get In Touch" 
        subtitle="Ready to start your journey? Let's discuss how we can help you succeed in Japan."
        backgroundImage="/assests/pexels-48393-356269.jpg"
      />
      <Contact />
    </>
  );
}
