import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function BlogPage() {
  return (
    <>
      <Breadcrumb currentPage="Blog" currentPagePath="/blog" />
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights, strategies, and expert knowledge for successful business in Japan."
      />
      <Blog />
    </>
  );
}
