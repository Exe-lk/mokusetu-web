import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VMV from "@/components/VMV";
import USP from "@/components/USP";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import NavigationSummary from "@/components/NavigationSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <USP />
      <Blog />
      <Contact />
    </>
  );
}
