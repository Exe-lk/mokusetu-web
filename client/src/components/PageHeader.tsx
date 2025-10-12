"use client";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative w-full min-h-[60vh] border-b border-primary/10 overflow-hidden">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="Page Header Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/30 to-white/30"></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Back to Home Button */}
          <div className="mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-white hover:border-primary/30 rounded-xl transition-all duration-300 font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-brand">{title}</span>
          </h1>
          
          {/* Page Subtitle */}
          {subtitle && (
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="section-divider mb-12"></div>
        </div>
        </div>
      </div>
    </div>
  );
}
