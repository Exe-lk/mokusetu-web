"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchAboutPage } from '@/app/store/slices/aboutSlice';
import type { StorySection, CoreValue, TimelineItem } from '@/app/service/about.service';
import IconRenderer from "@/components/IconRenderer";

export default function AboutPage() {
  const dispatch = useAppDispatch();
  const { aboutPage, loading, error } = useAppSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchAboutPage());
  }, [dispatch]);

  console.log("aboutPage", aboutPage);

  const [storyRef1, isStoryVisible1] = useIntersectionObserver();
  const [storyRef2, isStoryVisible2] = useIntersectionObserver();
  const [storyRef3, isStoryVisible3] = useIntersectionObserver();
  const [storyRef4, isStoryVisible4] = useIntersectionObserver();
  
  const storyRefs = [
    [storyRef1, isStoryVisible1],
    [storyRef2, isStoryVisible2],
    [storyRef3, isStoryVisible3],
    [storyRef4, isStoryVisible4],
  ];

  const [missionRef, isMissionVisible] = useIntersectionObserver();
  const [valuesRef, isValuesVisible] = useIntersectionObserver();
  const [timelineRef, isTimelineVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    setShowAll(true);
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center py-12">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-gray-500 mt-4">Loading about page...</p>
        </div>
      </div>
    );
  }

  if (error || !aboutPage || !aboutPage.active) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center py-12">
          <p className="text-muted">Unable to load about page content.</p>
        </div>
      </div>
    );
  }

  const storySections = aboutPage.storySections || [];
  const coreValues = aboutPage.coreValues || [];
  const timeline = aboutPage.timeline || [];

  return (
    <>
      <Breadcrumb currentPage={aboutPage.pageTitle} currentPagePath="/about" />
      <PageHeader
        title={aboutPage.pageTitle}
        subtitle={aboutPage.pageSubtitle}
        backgroundImage={aboutPage.backgroundImage}
      />

      {storySections.length > 0 && (
        <section className="section bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {storySections.map((section: StorySection, index: number) => {
                  const [ref, isVisible] = storyRefs[index] || [null, false];
                  const isFirst = index === 0;
                  return (
                    <div 
                      key={index} 
                      ref={ref as React.RefObject<HTMLDivElement>} 
                      className={`floating-paper p-8 rounded-3xl fade-in ${(isVisible || showAll) ? 'visible' : ''}`}
                    >
                    <h3 className={`text-2xl lg:text-3xl font-bold text-foreground mb-6 ${isFirst ? 'text-center' : ''}`}>
                      <span className="gradient-text-brand">{section.title}</span>
                    </h3>
                    <div 
                      className="text-lg text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: section.content.includes('<') 
                          ? section.content 
                          : `<p>${section.content}</p>`
                      }}
                    />
                    {section.image && (
                      <div className="mt-6">
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section-muted">
        <div className="container mx-auto px-6">
          {aboutPage.missionSectionTitle && (
            <div ref={missionRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${(isMissionVisible || showAll) ? 'visible' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text-brand">{aboutPage.missionSectionTitle}</span>
              </h2>
              {aboutPage.missionSectionSubtitle && (
                <p className="text-xl text-muted max-w-3xl mx-auto">
                  {aboutPage.missionSectionSubtitle}
                </p>
              )}
            </div>
          )}

          {(aboutPage.missionTitle || aboutPage.visionTitle) && (
            <div className="grid lg:grid-cols-2 gap-12">
              {aboutPage.missionTitle && (
                <div className={`floating-paper p-8 rounded-3xl slide-in-left ${(isMissionVisible || showAll) ? 'visible' : ''}`}>
                  <div className="flex items-start gap-4 mb-6">
                    {aboutPage.missionIcon && (
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconRenderer 
                          icon={aboutPage.missionIcon} 
                          color="#4B5563" 
                          size={24}
                          className="flex-shrink-0"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{aboutPage.missionTitle}</h3>
                      {aboutPage.missionContent && (
                        <p className="text-muted leading-relaxed">{aboutPage.missionContent}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {aboutPage.visionTitle && (
                <div className={`floating-paper p-8 rounded-3xl slide-in-right ${(isMissionVisible || showAll) ? 'visible' : ''}`}>
                  <div className="flex items-start gap-4 mb-6">
                    {aboutPage.visionIcon && (
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconRenderer 
                          icon={aboutPage.visionIcon} 
                          color="#4B5563" 
                          size={24}
                          className="flex-shrink-0"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{aboutPage.visionTitle}</h3>
                      {aboutPage.visionContent && (
                        <p className="text-muted leading-relaxed">{aboutPage.visionContent}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {aboutPage.brandArchetypeTitle && (
            <div className="text-center mb-16 mt-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text-brand">{aboutPage.brandArchetypeTitle}</span>
              </h2>
            </div>
          )}

          {aboutPage.brandArchetype && (
            <div className="mt-12 max-w-3xl mx-auto">
              <div className={`floating-paper p-8 rounded-3xl scale-in ${(isMissionVisible || showAll) ? 'visible' : ''}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <p className="text-muted leading-relaxed">{aboutPage.brandArchetype}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-6">
          {aboutPage.coreValuesSectionTitle && (
            <div ref={valuesRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${(isValuesVisible || showAll) ? 'visible' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text-brand">{aboutPage.coreValuesSectionTitle}</span>
              </h2>
              {aboutPage.coreValuesSectionSubtitle && (
                <p className="text-xl text-muted max-w-3xl mx-auto">
                  {aboutPage.coreValuesSectionSubtitle}
                </p>
              )}
            </div>
          )}

          {coreValues.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {coreValues.slice(0, 3).map((value: CoreValue, index: number) => (
                  <div 
                    key={index} 
                    className={`floating-paper p-6 rounded-2xl scale-in ${(isValuesVisible || showAll) ? 'visible' : ''}`} 
                    style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {value.icon && (
                        <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                          <IconRenderer 
                            icon={value.icon} 
                            color="white" 
                            size={32}
                            className="flex-shrink-0"
                          />
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                      <p className="text-muted text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {coreValues.length > 3 && (
                <div className="flex justify-center gap-8">
                  {coreValues.slice(3).map((value: CoreValue, index: number) => (
                    <div 
                      key={index + 3} 
                      className={`floating-paper p-6 rounded-2xl scale-in ${(isValuesVisible || showAll) ? 'visible' : ''}`} 
                      style={{ transitionDelay: `${(index + 4) * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center text-center">
                        {value.icon && (
                          <div className={`icon-container-unique w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg mb-6`}>
                            <IconRenderer 
                              icon={value.icon} 
                              color="white" 
                              size={32}
                              className="flex-shrink-0"
                            />
                          </div>
                        )}
                        <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                        <p className="text-muted text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container mx-auto px-6">
          {aboutPage.timelineSectionTitle && (
            <div ref={timelineRef as React.RefObject<HTMLDivElement>} className={`text-center mb-16 fade-in ${(isTimelineVisible || showAll) ? 'visible' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text-brand">{aboutPage.timelineSectionTitle}</span>
              </h2>
              {aboutPage.timelineSectionSubtitle && (
                <p className="text-xl text-muted max-w-3xl mx-auto">
                  {aboutPage.timelineSectionSubtitle}
                </p>
              )}
            </div>
          )}

          {timeline.length > 0 && (
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20"></div>

              <div className="space-y-12">
                {timeline.map((item: TimelineItem, index: number) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div 
                      key={index} 
                      className={`relative flex items-center ${isEven ? 'slide-in-left' : 'slide-in-right'} ${(isTimelineVisible || showAll) ? 'visible' : ''}`} 
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      {isEven ? (
                        <>
                          <div className="w-1/2 pr-8 text-right">
                            <div className="floating-paper p-6 rounded-2xl">
                              <h3 className="text-xl font-bold text-foreground mb-2">{item.year} - {item.title}</h3>
                              <p className="text-muted">{item.description}</p>
                            </div>
                          </div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                          <div className="w-1/2 pl-8"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-8"></div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                          <div className="w-1/2 pl-8">
                            <div className="floating-paper p-6 rounded-2xl">
                              <h3 className="text-xl font-bold text-foreground mb-2">{item.year} - {item.title}</h3>
                              <p className="text-muted">{item.description}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>


      {(aboutPage.ctaTitle || aboutPage.ctaContent) && (
        <section className="section section-muted">
          <div className="container mx-auto px-6">
            <div ref={ctaRef as React.RefObject<HTMLDivElement>} className={`floating-paper p-12 rounded-3xl text-center max-w-4xl mx-auto scale-in ${(isCtaVisible || showAll) ? 'visible' : ''}`}>
              {aboutPage.ctaTitle && (
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  <span className="gradient-text-brand">{aboutPage.ctaTitle}</span>
                </h2>
              )}
              {aboutPage.ctaContent && (
                <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                  {aboutPage.ctaContent}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">Get Started Today</a>
                <a href="/services" className="btn-secondary"><span>Explore Our Services</span></a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
