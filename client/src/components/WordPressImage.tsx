'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WordPressImageProps {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fallbackSeed?: number | string;
}

export default function WordPressImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  fallbackSeed = 'default'
}: WordPressImageProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const getFallbackUrl = () => {
    const seed = typeof fallbackSeed === 'number' ? fallbackSeed : fallbackSeed.length || 1;
    return `https://picsum.photos/${width || 400}/${height || 250}?random=${seed}`;
  };

  // Handle image loading error
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setCurrentSrc(getFallbackUrl());
    }
  };

  if (!currentSrc || imageError) {
    const fallbackUrl = getFallbackUrl();
    
    if (fill) {
      return (
        <Image
          src={fallbackUrl}
          alt={alt}
          fill
          className={className}
          priority={priority}
          unoptimized 
        />
      );
    }
    
    return (
      <Image
        src={fallbackUrl}
        alt={alt}
        width={width || 400}
        height={height || 250}
        className={className}
        priority={priority}
        unoptimized 
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        onError={handleImageError}
      />
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width || 400}
      height={height || 250}
      className={className}
      priority={priority}
      onError={handleImageError}
    />
  );
}
