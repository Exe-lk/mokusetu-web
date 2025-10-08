"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  comingSoon?: boolean;
};

type Expertise = {
  title: string;
  description: string;
  icon: string;
};

export default function SalesRepresentationPage() {
  const services: Service[] = [
    {
      title: "Sales & Representative Support",
      description:
        "Your trusted local business partner in Japan.We represent your brand, build lasting client relationships, and help you expand with confidence and cultural precision.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-primary to-primary-light",
      href: "/services/sales-representation"
    },
    {
      title: "Recruitment Support Support",
      description:
        "Building your Japan team made easier.Our upcoming recruitment service connects you with bilingual and local professionals who understand both your culture and Japan's business environment.",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
      color: "from-success to-emerald-400",
      href: "/services/recruitment",
      comingSoon: true
    },
    {
      title: "Quality Inspection",
      description:
        "Ensure your products meet the highest standards with our comprehensive quality inspection services.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-primary to-primary-light",
      href: "/services/quality-inspection"
    },
  ];

  const expertise: Expertise[] = [
    {
      title: "Market Entry & Business Development",
      description:
        "We support international companies looking to establish and expand their presence in Japan. Our approach—rooted in thorough, market-specific research—ensures you connect with the right partners and develop effective sales strategies tailored for Japan's competitive landscape.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Supplier Sourcing & Procurement",
      description:
        "We connect clients with dependable Japanese and global suppliers. From evaluating vendors to managing procurement costs, our focus is on delivering quality materials and services that meet your business goals—and your budget.",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0v-2m-8 2v2m0-2h8m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2"
    },
    {
      title: "Quality Inspection & Compliance",
      description:
        "Our team conducts on-site quality inspections and technical evaluations to ensure your goods meet both client expectations and international standards. Compliance isn't just a box to tick—it's a commitment to delivering excellence.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Regulatory & Cultural Advisory",
      description:
        "Navigating Japan's regulatory environment can be complex, and cultural missteps are costly. We guide you through legal requirements and help you bridge cultural and communication gaps, ensuring your business operates smoothly and successfully in the Japanese market.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    }
  ];

  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const [expertiseRef, expertiseVisible] = useIntersectionObserver();

  return (
    <>
      <Breadcrumb
        currentPage="Our Services"
        currentPagePath="/services/all-services"
        parentPage="Services"
        parentPagePath="/services"
      />
      <PageHeader
        title="Our Services"
        subtitle="End-to-end support across strategy, sourcing, quality, and execution."
      />

      <section className="section" ref={sectionRef}>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
            {services.map((service, index) => {
              const gradientClass = index === 0
                ? "hover:from-primary hover:to-secondary"
                : index === 1
                  ? "hover:from-secondary hover:to-success"
                  : "hover:from-success hover:to-primary";

              return (
                <div
                  key={service.title}
                  className={`floating-paper p-8 rounded-3xl group hover:bg-gradient-to-r ${gradientClass} transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    {service.comingSoon ? (
                      <div className="mt-auto">
                        <span className="inline-block px-6 py-2 bg-gray-300 text-gray-600 rounded-full font-semibold text-sm cursor-not-allowed">
                          Coming Soon
                        </span>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <Link
                          href={service.href}
                          className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg"
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section bg-background-light" ref={expertiseRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs in the Japanese market
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            {expertise.map((item, index) => {
              const gradientClass = index === 0
                ? "hover:from-primary hover:to-secondary"
                : index === 1
                  ? "hover:from-secondary hover:to-success"
                  : index === 2
                    ? "hover:from-success hover:to-primary"
                    : "hover:from-primary hover:to-secondary";

              return (
                <div
                  key={item.title}
                  className={`floating-paper p-8 rounded-3xl group hover:bg-gradient-to-r ${gradientClass} transition-all duration-300 hover-lift ${expertiseVisible ? 'stagger-in visible' : 'stagger-in'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col h-full">
                    <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
