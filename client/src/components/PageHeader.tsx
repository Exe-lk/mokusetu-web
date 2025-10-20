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
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/40 to-black/80"></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            <span className="text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] " style={{ textShadow: "0 2px 6px rgba(7, 1, 1, 0.7), 0 4px 12px rgba(9, 1, 1, 0.5)" }}>{title}</span>
          </h1>
          
          {/* Page Subtitle */}
          {subtitle && (
            <p className="text-xl text-accent max-w-3xl mx-auto font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: "0 2px 6px rgba(14, 13, 13, 0.7), 0 4px 12px rgba(14, 13, 13, 0.5)" }}>
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
