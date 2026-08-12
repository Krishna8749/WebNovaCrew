import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * OptimizedImage component with WebP support and fallback
 * Automatically generates WebP version URL and provides fallback
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate WebP URL (assumes images are served with WebP support)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Check if browser supports WebP
  const supportsWebP = () => {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  useEffect(() => {
    // Use WebP if supported, otherwise use original
    if (supportsWebP() && src.match(/\.(jpg|jpeg|png)$/i)) {
      setImageSrc(webpSrc);
    }
  }, [src, webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original image if WebP fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {src.match(/\.(jpg|jpeg|png)$/i) && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      
      {/* Fallback to original format */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </picture>
  );
}

/**
 * Responsive Image component with multiple sizes
 */
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  className = '',
  loading = 'lazy'
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate srcset for different sizes
  const generateSrcSet = (baseSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => {
        // For Unsplash images, use their resize API
        if (baseSrc.includes('unsplash.com')) {
          return `${baseSrc}&w=${width} ${width}w`;
        }
        // For local images, assume they're available in different sizes
        return `${baseSrc}?w=${width} ${width}w`;
      })
      .join(', ');
  };

  return (
    <picture>
      {/* WebP sources */}
      {src.match(/\.(jpg|jpeg|png)$/i) && (
        <source
          type="image/webp"
          srcSet={generateSrcSet(src.replace(/\.(jpg|jpeg|png)$/i, '.webp'))}
          sizes={sizes}
        />
      )}
      
      {/* Original format sources */}
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
      />
    </picture>
  );
}

/**
 * Background Image component with WebP support
 */
interface BackgroundImageProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundImage({ src, className = '', children }: BackgroundImageProps) {
  const [bgImage, setBgImage] = useState(src);

  useEffect(() => {
    // Try to load WebP version
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    const img = new Image();
    img.onload = () => setBgImage(webpSrc);
    img.onerror = () => setBgImage(src);
    img.src = webpSrc;
  }, [src]);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {children}
    </div>
  );
}
