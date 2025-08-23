import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { SkillsPage } from '../pages/SkillsPage';
import { BlogsPage } from '../pages/BlogsPage';
import { ResumePage } from '../pages/ResumePage';
import { ContactPage } from '../pages/ContactPage';

export function AppHashRouter() {
  return (
    <HashRouter>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route for any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </HashRouter>
  );
}