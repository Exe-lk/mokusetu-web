"use client";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-accent/5 via-white to-secondary/5 border-b border-primary/10">
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
            <p className="text-xl text-muted max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
