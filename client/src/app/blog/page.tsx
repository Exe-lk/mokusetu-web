import BlogPage from "@/components/BlogPage";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function BlogPageRoute() {
  return (
    <>
    
      <Breadcrumb currentPage="Blog" currentPagePath="/blog" />
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights, strategies, and expert knowledge for successful business in Japan."
        backgroundImage="/assests/pexels-dexplanet-1628061.jpg"
      />
      <BlogPage />
    </>
  );
}
