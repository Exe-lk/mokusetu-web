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
          
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">
            <span className="gradient-text-brand">{title}</span>
          </h1>
          
          {/* Page Subtitle */}
          {subtitle && (
            <p className="text-xl text-foreground max-w-3xl mx-auto font-bold">
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
