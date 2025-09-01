"use client";
import Link from "next/link";

interface BreadcrumbProps {
  currentPage: string;
  currentPagePath: string;
}

export default function Breadcrumb({ currentPage, currentPagePath }: BreadcrumbProps) {
  return (
    <nav className="bg-accent/30 border-b border-primary/10 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link 
            href="/" 
            className="hover:text-primary transition-colors duration-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </Link>
          
          <svg className="w-4 h-4 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          
          <span className="text-primary font-medium">{currentPage}</span>
        </div>
      </div>
    </nav>
  );
}
