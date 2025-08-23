import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, User, Code, BookOpen, FileText, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home, path: '/' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase, path: '/portfolio' },
  { id: 'experience', label: 'Experience', icon: User, path: '/experience' },
  { id: 'skills', label: 'Skills', icon: Code, path: '/skills' },
  { id: 'journal', label: 'Journal', icon: BookOpen, path: '/journal' },
  { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
  { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Get active section from current route
  const getActiveSection = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    return activeItem ? activeItem.id : 'hero';
  };

  const activeSection = getActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent hover:from-red-300 hover:to-red-500 transition-all duration-300 cursor-pointer"
            >
              Apurbo Barua
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
                      isActive
                        ? 'text-red-400 bg-red-500/10'
                        : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-red-500/10 border border-red-500/20 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <div className="absolute inset-0 rounded-lg bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 glass border-t border-red-500/20 mt-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'text-red-400 bg-red-500/10 border border-red-500/20'
                            : 'text-muted-foreground hover:text-red-400 hover:bg-red-500/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IconComponent size={18} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}