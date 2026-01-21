"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchHomePage, updateHomePage } from '@/app/store/slices/homeSlice';
import type { HomePage } from '@/app/service/home.services';
import { useEffect } from 'react';
import IconRenderer from '@/components/IconRenderer';

export default function USP() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const dispatch = useAppDispatch();
  const { home, loading, error } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  return (
    <section id="usp" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">{home?.whyChooseTitle}</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
          {home?.whyChooseSubtitle}           </p>
        </div>
        
        <div className="section-divider mb-12"></div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <div className={`floating-paper p-8 rounded-3xl text-center group scale-in ${sectionVisible ? 'visible' : ''}`}>
            <div className="icon-container-unique w-16 h-16 mx-auto mb-6">
              {home?.whyChooseCards[0].cardIcon && (
                <IconRenderer
                  icon={home.whyChooseCards[0].cardIcon}
                  color="white"
                  size={28}
                />
              )}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{home?.whyChooseCards[0].cardTitle}</h3>
            <p className="text-muted">{home?.whyChooseCards[0].cardContent}</p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group scale-in ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="icon-container-unique w-16 h-16 mx-auto mb-6">
              {home?.whyChooseCards[1].cardIcon && (
                <IconRenderer
                  icon={home.whyChooseCards[1].cardIcon}
                  color="white"
                  size={28}
                />
              )}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{home?.whyChooseCards[1].cardTitle}</h3>
            <p className="text-muted">{home?.whyChooseCards[1].cardContent}</p>
          </div>
          
          <div className={`floating-paper p-8 rounded-3xl text-center group scale-in ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="icon-container-unique w-16 h-16 mx-auto mb-6">
              {home?.whyChooseCards[2].cardIcon && (
                <IconRenderer
                  icon={home.whyChooseCards[2].cardIcon}
                  color="white"
                  size={28}
                />
              )}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{home?.whyChooseCards[2].cardTitle}</h3>
            <p className="text-muted">{home?.whyChooseCards[2].cardContent}</p>
          </div>
          <div className={`floating-paper p-8 rounded-3xl text-center group scale-in ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div>
              <div className="icon-container-unique w-16 h-16 mx-auto mb-6">
                {home?.whyChooseCards[3].cardIcon && (
                  <IconRenderer
                    icon={home.whyChooseCards[3].cardIcon}
                    color="white"
                    size={28}
                  />
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{home?.whyChooseCards[3].cardTitle}</h3>
            <p className="text-muted">{home?.whyChooseCards[3].cardContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


