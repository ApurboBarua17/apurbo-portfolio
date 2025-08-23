import { projectId, publicAnonKey } from './info';

const SUPABASE_URL = `https://${projectId}.supabase.co`;
const API_BASE = `${SUPABASE_URL}/functions/v1/make-server-c30ebdae`;

export class SupabaseClient {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = publicAnonKey;
    this.baseUrl = API_BASE;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Contact form methods
  async submitContact(data: {
    name: string;
    email: string;
    message: string;
    subject?: string;
  }) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getContacts() {
    return this.request('/contact');
  }

  // Analytics methods
  async trackPageView(page: string, referrer?: string) {
    return this.request('/analytics', {
      method: 'POST',
      body: JSON.stringify({
        page,
        referrer: referrer || document.referrer,
        action: 'page_view',
      }),
    });
  }

  async trackEvent(action: string, data?: any) {
    return this.request('/analytics', {
      method: 'POST',
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer,
        action,
        ...data,
      }),
    });
  }

  async getAnalytics() {
    return this.request('/analytics');
  }

  // Resume download tracking
  async trackResumeDownload() {
    return this.request('/resume-download', {
      method: 'POST',
      body: JSON.stringify({
        referrer: document.referrer,
      }),
    });
  }

  async getDownloadStats() {
    return this.request('/downloads');
  }

  // Project tracking
  async trackProjectView(projectTitle: string, projectUrl?: string) {
    return this.request('/project-view', {
      method: 'POST',
      body: JSON.stringify({
        projectTitle,
        projectUrl: projectUrl || window.location.href,
      }),
    });
  }

  async getProjectStats() {
    return this.request('/project-stats');
  }

  // Dashboard data
  async getDashboard() {
    return this.request('/dashboard');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

// Create a singleton instance
export const supabase = new SupabaseClient();

// Convenience functions for common operations
export const analytics = {
  trackPageView: (page: string) => supabase.trackPageView(page),
  trackEvent: (action: string, data?: any) => supabase.trackEvent(action, data),
  trackClick: (element: string) => supabase.trackEvent('click', { element }),
  trackDownload: () => supabase.trackResumeDownload(),
  trackProjectView: (title: string) => supabase.trackProjectView(title),
};

export const contact = {
  submit: (data: { name: string; email: string; message: string; subject?: string }) => 
    supabase.submitContact(data),
};

// Auto-track page views (optional - call this in your App.tsx)
export const enableAutoTracking = () => {
  // Track initial page load
  analytics.trackPageView(window.location.pathname);
  
  // Track navigation changes (for SPAs)
  let currentPath = window.location.pathname;
  
  const checkForNavigationChange = () => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      analytics.trackPageView(currentPath);
    }
  };
  
  // Check for navigation changes every second
  setInterval(checkForNavigationChange, 1000);
  
  // Also track on popstate (back/forward buttons)
  window.addEventListener('popstate', () => {
    analytics.trackPageView(window.location.pathname);
  });
};