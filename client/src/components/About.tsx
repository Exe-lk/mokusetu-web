"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchHomePage, updateHomePage } from '@/app/store/slices/homeSlice';
import type { HomePage } from '@/app/service/home.services';
import { useEffect } from 'react';
import IconRenderer from '@/components/IconRenderer';

export default function About() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const dispatch = useAppDispatch();
  const { home, loading, error } = useAppSelector((state) => state.home);


  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  const aboutParagraphs = (home?.aboutContent || '')
    .split(/\r\n\s*\r\n|\n\s*\n/)
    .filter((p) => p.trim().length > 0);

  return (
    <section id="about" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="floating-paper p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {home?.aboutTitle}
              </h3>
              {aboutParagraphs.length > 0 ? (
                aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))
              ) : (
                home?.aboutContent && (
                  <p className="text-muted leading-relaxed mb-4">
                    {home.aboutContent}
                  </p>
                )
              )}
              <div className="mt-8 pt-6 border-t border-accent/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted mb-3">Want to learn more about our company?</p>
                  <a 
                    href="/about" 
                    className="btn-secondary inline-flex items-center gap-3 group"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
              
          <div className={`space-y-6 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="grid gap-6">
              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    {home?.threeCards[0].cardIcon && (
                      <IconRenderer
                        icon={home.threeCards[0].cardIcon}
                        color="white"
                        size={24}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{home?.threeCards[0].cardTitle}</h4>
                    <p className="text-muted text-sm">{home?.threeCards[0].cardContent}</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    {home?.threeCards[1].cardIcon && (
                      <IconRenderer
                        icon={home.threeCards[1].cardIcon}
                        color="white"
                        size={24}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{home?.threeCards[1].cardTitle}</h4>
                    <p className="text-muted text-sm">{home?.threeCards[1].cardContent}</p>
                  </div>
                </div>
              </div>

              <div className="floating-paper p-6 rounded-2xl group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    {home?.threeCards[2].cardIcon && (
                      <IconRenderer
                        icon={home.threeCards[2].cardIcon}
                        color="white"
                        size={24}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{home?.threeCards[2].cardTitle}</h4>
                    <p className="text-muted text-sm">{home?.threeCards[2].cardContent}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
