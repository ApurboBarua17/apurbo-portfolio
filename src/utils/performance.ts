// Performance monitoring utilities
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics = {
        'Page Load Time': perfData.loadEventEnd - perfData.fetchStart,
        'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.fetchStart,
        'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
      };

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.table(metrics);
      }
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/apurbo.jpeg',
    '/logo.svg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
