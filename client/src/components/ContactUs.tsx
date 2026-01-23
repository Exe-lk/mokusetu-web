"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import { fetchHomePage, updateHomePage } from '@/app/store/slices/homeSlice';
import type { HomePage } from '@/app/service/home.services';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import IconRenderer from '@/components/IconRenderer';


export default function ContactUs() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const dispatch = useAppDispatch();
  const { home, loading, error } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  return (
    <section id="contact-us" className="section" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`floating-paper p-8 rounded-3xl relative overflow-hidden ${sectionVisible ? 'scale-in visible' : 'scale-in'}`}>
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text-brand">{home?.footerTitle}</span>
                </h2>
                
                <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                  {home?.footerSubtitle}
                </p>

                <div className="flex justify-center">
                  <Link 
                    href="/contact"
                    className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}