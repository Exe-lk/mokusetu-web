"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchServices, clearCurrentService } from "@/app/store/slices/servicesSlice";
import { useEffect } from "react";

type Expertise = {
  title: string;
  description: string;
  icon: string;
};

export default function SalesRepresentationPage() {
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((state) => state.services);
  console.log("services", services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);


  const expertise: Expertise[] = [
    {
      title: "Market Entry & Business Development",
      description:
        "We support international companies looking to establish and expand their presence in Japan. Our approach—rooted in thorough, market-specific research—ensures you connect with the right partners and develop effective sales strategies tailored for Japan's competitive landscape.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
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
        backgroundImage="/assests/pexels-evgeny-tchebotarev-1058775-2187662.jpg"
      />

      <section className="section" ref={sectionRef as React.RefObject<HTMLElement>}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`mb-16 sm:mb-20 last:mb-0 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="w-full lg:w-1/2">
                  {service.listImage || service.backgroundImage ? (
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={service.listImage || service.backgroundImage as string}
                        alt={service.pageTitle || "Service image"}
                        width={600}
                        height={400}
                        className="w-full h-64 sm:h-80 md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ) : null}
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    {service.pageTitle}
                  </h3>
                  <p className="text-base sm:text-lg text-muted leading-relaxed">
                    {service.summary || service.pageSubtitle}
                  </p>
                  <div className="pt-4">
                    {service.active ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-secondary inline-flex items-center gap-2 sm:gap-3 group text-base sm:text-lg"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gray-300 text-gray-600 rounded-full font-semibold text-base sm:text-lg cursor-not-allowed">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-background-light" ref={expertiseRef as React.RefObject<HTMLElement>}>
        <div className={`text-center mb-12 sm:mb-16 fade-in ${expertiseVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto px-4">
            Comprehensive solutions tailored to your business needs in the Japanese market
          </p>
        </div>
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl w-full">
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
                  className={`floating-paper p-6 sm:p-8 rounded-2xl sm:rounded-3xl group fade-in ${expertiseVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`icon-container-unique w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-5 sm:mb-6`}>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-base flex-grow">
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
