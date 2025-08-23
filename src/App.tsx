import { useEffect } from 'react';
import { Router } from './components/Router';
import { enableAutoTracking } from './utils/supabase/client';
import { measurePerformance, preloadCriticalResources } from './utils/performance';
import './styles/globals.css';

export default function App() {
  useEffect(() => {
    // Enable automatic page view tracking
    enableAutoTracking();
    
    // Initialize performance monitoring
    measurePerformance();
    
    // Preload critical resources
    preloadCriticalResources();
  }, []);

  return <Router />;
}