"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchServiceBySlug, clearCurrentService } from "@/app/store/slices/servicesSlice";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import IconRenderer from "@/components/IconRenderer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const dispatch = useAppDispatch();
  const { currentService, loading, error } = useAppSelector((state) => state.services);
  const [slug, setSlug] = useState<string>("");
  const [showAll, setShowAll] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();
  const [servicesRef, isServicesVisible] = useIntersectionObserver();
  const [whyUsRef, isWhyUsVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
    });
  }, [params]);

  useEffect(() => {
    if (slug) {
      const slugMap: Record<string, string> = { 
        "quality-inspection": "quality-inspection-services",
        "sales-representation": "sales-representative-support",
      };
      const dbSlug = slugMap[slug] || slug;
      
      dispatch(clearCurrentService());
      setHasFetched(false);
      
      dispatch(fetchServiceBySlug(dbSlug));
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (!loading && slug) {
      setHasFetched(true);
    }
  }, [loading, slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || !hasFetched || !slug) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center py-12">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-gray-500 mt-4">Loading service...</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Error fetching service:', error);
    notFound();
  }

  if (!currentService) {
    console.error('Service not found for slug:', slug);
    notFound();
  }

  if (!currentService.active) {
    console.error('Service is not active:', currentService.slug);
    notFound();
  }

  const service = currentService;
  const cardContents = service.cardContents || [];
  const servicesList = service.servicesList || [];
  const whyChoosePoints = service.whyChoosePoints || [];

  const getRouteFromSlug = (slug: string): string => {
    const slugMap: Record<string, string> = {
      "quality-inspection-services": "/services/quality-inspection",
      "sales-representative-support": "/services/sales-representation",
    };
    return slugMap[slug] || `/services/${slug}`;
  };

  return (
    <div className="relative z-10">
      <Breadcrumb 
        currentPage={service.pageTitle} 
        currentPagePath={getRouteFromSlug(service.slug)}
        parentPage="Services"
        parentPagePath="/services"
      />
      
      <PageHeader 
        title={service.pageTitle} 
        subtitle={service.pageSubtitle}
        backgroundImage={service.backgroundImage}
      />
      
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {service.mainContent && (
              <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 fade-in ${(isContentVisible || showAll) ? 'visible' : ''}`}>
                <div 
                  className="text-lg text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: service.mainContent.includes('<') 
                      ? service.mainContent 
                      : service.mainContent.split('\n').map((para: string) => `<p class="mb-6">${para}</p>`).join('')
                  }}
                />
              </div>
            )}

            {cardContents.length > 0 && (
              <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8 mb-12">
                {cardContents.map((card: any, index: number) => (
                  <div 
                    key={index} 
                    className={`floating-paper p-8 rounded-3xl flex flex-col items-center text-center h-full ${
                      index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                    } ${(isCardsVisible || showAll) ? 'visible' : ''}`}
                  >
                    {card.icon && (
                      <div className="icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6">
                        <IconRenderer 
                          icon={card.icon} 
                          color="white" 
                          size={32}
                          className="flex-shrink-0"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{card.header}</h3>
                    <p className="text-muted leading-relaxed">{card.content}</p>
                  </div>
                ))}
              </div>
            )}

            {servicesList.length > 0 && (
              <div ref={servicesRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 h-full scale-in ${(isServicesVisible || showAll) ? 'visible' : ''}`}>
                {service.servicesTitle && (
                  <h2 className="text-3xl font-bold mb-6 gradient-text-brand text-center">
                    {service.servicesTitle}
                  </h2>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {servicesList.map((item: any, index: number) => (
                    <div key={index} className={index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}>
                      <h4 className="text-xl font-semibold mb-3 text-left">{item.title}</h4>
                      {item.points && item.points.length > 0 && (
                        <ul className="space-y-2 text-muted text-left pl-4">
                          {item.points.map((point: string, pointIndex: number) => (
                            <li key={pointIndex}>• {point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {whyChoosePoints.length > 0 && (
              <div ref={whyUsRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-8 rounded-3xl mb-8 fade-in ${(isWhyUsVisible || showAll) ? 'visible' : ''}`}>
                {service.whyChooseTitle && (
                  <h3 className="text-2xl font-bold mb-4 text-center mb-12">
                    {service.whyChooseTitle}
                  </h3>
                )}
                <div className="grid md:grid-cols-3 gap-6">
                  {whyChoosePoints.map((point: any, index: number) => (
                    <div key={index} className="text-center">
                      {point.icon && (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconRenderer 
                            icon={point.icon} 
                            color="var(--primary)" 
                            size={24}
                            className="flex-shrink-0"
                          />
                        </div>
                      )}
                      <h4 className="font-semibold mb-2">{point.title}</h4>
                      {point.subPoints && point.subPoints.length > 0 && (
                        <ul className="text-sm text-muted space-y-1">
                          {point.subPoints.map((subPoint: string, subIndex: number) => (
                            <li key={subIndex}>{subPoint}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(service.footerTitle || service.footerContent) && (
              <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="text-center">
                <div className={`inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md scale-in ${(isCtaVisible || showAll) ? 'visible' : ''}`}>
                  {service.footerTitle && (
                    <h3 className="text-xl font-semibold">{service.footerTitle}</h3>
                  )}
                  {service.footerContent && (
                    <p className="text-muted">{service.footerContent}</p>
                  )}
                  <Link href="/contact" className="btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
