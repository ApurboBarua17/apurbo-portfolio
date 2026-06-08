import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { SkillsPage } from '../pages/SkillsPage';
import { BlogsPage } from '../pages/BlogsPage';
import { ResumePage } from '../pages/ResumePage';
import { ContactPage } from '../pages/ContactPage';
import { useEffect } from 'react';

function AppRoutes() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/journal" element={<BlogsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export function Router() {
  // For GitHub Pages, we use HashRouter instead of BrowserRouter
  // This ensures that refreshing the page works correctly
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
