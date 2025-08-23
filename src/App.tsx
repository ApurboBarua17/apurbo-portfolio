import { useEffect } from 'react';
import { Router } from './components/Router';
import { enableAutoTracking } from './utils/supabase/client';
import './styles/globals.css';

export default function App() {
  useEffect(() => {
    // Enable automatic page view tracking
    enableAutoTracking();
  }, []);

  return <Router />;
}