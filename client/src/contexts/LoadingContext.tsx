"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Function to preload essential resources
const preloadResources = async (): Promise<void> => {
  const resources = [
    '/logo.svg',
    '/globe.svg',
    '/file.svg',
    '/window.svg',
    '/vercel.svg',
    '/next.svg',
    // Add other critical resources here
  ];

  const preloadPromises = resources.map((resource) => {
    return new Promise<void>((resolve) => {
      if (resource.endsWith('/')) {
        // For directories, just resolve immediately
        resolve();
      } else {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Continue even if some resources fail
        img.src = resource;
      }
    });
  });

  // Also wait for fonts to load
  const fontPromise = document.fonts.ready;
  
  // Wait for both resources and fonts
  await Promise.all([...preloadPromises, fontPromise]);
};

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload essential resources
        await preloadResources();
        
        // Very minimal delay to not interfere with Hero animations
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setIsLoading(false);
      } catch (error) {
        console.warn('Preload failed, continuing anyway:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
