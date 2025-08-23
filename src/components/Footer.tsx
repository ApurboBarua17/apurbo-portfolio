import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-card/50 to-card border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cursor-pointer"
              >
                Apurbo Barua
              </button>
              <p className="text-white leading-relaxed">
                Aspiring Software Engineer passionate about creating innovative solutions through technology and AI.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/apurbo-barua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/apurbo-barua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:apurbo@arizona.edu"
                  className="text-white hover:text-red-400 transition-colors duration-200"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-red-400 transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Let's Work Together</h4>
              <p className="text-white text-sm">
                Seeking Summer 2025 internships in Software Engineering, AI/ML, or Data Science.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white w-full btn-modern"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>© {currentYear} Apurbo Barua. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & TailwindCSS</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-white hover:text-red-400 hover:bg-red-500/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Floating scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl hover-lift z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 mx-auto" />
      </motion.button>
    </footer>
  );
}