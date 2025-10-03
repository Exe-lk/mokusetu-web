"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [counts, setCounts] = useState({
    partners: 0,
    experience: 0,
    success: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (heroVisible) {
      const duration = 3000; 
      const steps = 100;
      const stepDuration = duration / steps;

      const animateCounts = () => {
        let currentStep = 0;
        
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          setCounts({
            partners: Math.floor(3 * easeOutQuart),
            experience: Math.floor(15 * easeOutQuart),
            success: Math.floor(98 * easeOutQuart)
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setCounts({
              partners: 3,
              experience: 15,
              success: 98
            });
          }
        }, stepDuration);
      };

      const timer = setTimeout(animateCounts, 500);
      return () => clearTimeout(timer);
    }
  }, [heroVisible]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent/5 via-white to-secondary/5" ref={heroRef}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-success/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-2xl rotate-45 floating"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-secondary/10 rounded-full floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-success/10 rotate-12 floating" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`space-y-8 ${heroVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="space-y-6 mt-8">
              <h1 className="text-5xl lg:text-7xl font-black leading-none">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-success">
                  Bridging
                </span>
                <span className="block text-6xl lg:text-8xl text-secondary mt-2">
                  Global
                </span>
                <span className="block text-5xl lg:text-7xl text-foreground/80 mt-1">
                  Business
                </span>
                <span className="block text-4xl lg:text-6xl text-muted mt-2">
                  with Japan
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-xl font-medium text-sm border border-primary/20">
                  Entrepreneurs
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-xl font-medium text-sm border border-secondary/20">
                  SMEs
                </span>
                <span className="px-4 py-2 bg-success/10 text-success rounded-xl font-medium text-sm border border-success/20">
                  Corporations
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-muted max-w-2xl leading-relaxed font-medium">
                MokuSetu Group G.K. connects international businesses with opportunities in the Japanese market — from strategy to on-the-ground execution.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-secondary/30 text-secondary font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:text-white hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          
          <div className={`relative ${heroVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-success/20 rounded-3xl blur-3xl"></div>
              
              <div 
                className="relative aspect-square rounded-3xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-8">
                    <div className="relative">
                     <Image src="/Picture1.png" alt="Hero Image" width={350} height={350} className="rounded-3xl mx-auto" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-base text-secondary font-semibold max-w-xs mx-auto">
                        Comprehensive market entry solutions with local expertise
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-secondary">Cultural Expertise</span>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300">
                  <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-secondary">Local Network</span>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300">
                  <div className="w-3 h-3 bg-success rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-secondary">Proven Results</span>
                </div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-success to-primary rounded-2xl rotate-12 floating shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl -rotate-12 floating shadow-lg" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-20 mb-8">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 items-center max-w-4xl mx-auto">
            <div className="text-center p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="stat-number text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                {counts.partners}+
              </div>
              <div className="text-sm text-muted font-medium">Global Partners</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="stat-number text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-success mb-1">
                {counts.experience}+
              </div>
              <div className="text-sm text-muted font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-accent/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="stat-number text-4xl lg:text-6xl font-bold text-success mb-1">
                {counts.success}%
              </div>
              <div className="text-sm text-muted font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


