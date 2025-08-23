import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { SkillsPage } from '../pages/SkillsPage';
import { BlogsPage } from '../pages/BlogsPage';
import { ResumePage } from '../pages/ResumePage';
import { ContactPage } from '../pages/ContactPage';

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
  // Use the same base path that's configured in vite.config.ts
  return (
    <BrowserRouter basename="/apurbo-portfolio">
      <AppRoutes />
    </BrowserRouter>
  );
}
