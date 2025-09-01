import VMV from "@/components/VMV";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function VisionMissionPage() {
  return (
    <>
      <Breadcrumb currentPage="Vision & Mission" currentPagePath="/vision-mission" />
      <PageHeader 
        title="Vision & Mission" 
        subtitle="Building bridges between global businesses and Japan's unique market landscape."
      />
      <VMV />
    </>
  );
}
