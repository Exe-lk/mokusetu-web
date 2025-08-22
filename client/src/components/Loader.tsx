"use client";
import { useLoading } from "@/contexts/LoadingContext";

export default function Loader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-accent via-white to-accent-dark flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 japanese-pattern opacity-5"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Main Logo */}
          <div className="relative inline-block">
            <img 
              src="/logo.svg" 
              alt="MokuSetu Group G.K. Logo" 
              className="w-24 h-24 animate-pulse"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          {/* Floating Elements Around Logo */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary/30 rounded-full floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-success/30 rounded-full floating" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent/30 rounded-full floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Company Name */}
        <h1 className="text-2xl font-bold text-secondary mb-2 animate-fade-in">
          MokuSetu Group G.K.
        </h1>
        
        {/* Tagline */}
        <p className="text-muted mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Where Bridge Begins
        </p>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-sm text-muted animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Connecting global business with Japan...
          </p>
          
          {/* Loading Dots */}
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-success rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-muted animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>15+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
