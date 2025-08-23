// Image optimization utility
export const optimizeImageUrl = (src: string, width?: number, quality?: number) => {
  if (!src) return src;
  
  // For local images, return as-is
  if (src.startsWith('/')) return src;
  
  // For external images, add optimization parameters
  const url = new URL(src, window.location.origin);
  if (width) url.searchParams.set('w', width.toString());
  if (quality) url.searchParams.set('q', quality.toString());
  
  return url.toString();
};

// Lazy loading component
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}) => {
  return (
    <img
      src={optimizeImageUrl(src, width, 75)}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      {...props}
    />
  );
};
