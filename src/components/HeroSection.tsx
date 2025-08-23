import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

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

  const stats = [
    { number: '3+', label: 'Years Programming' },
    { number: '15+', label: 'Technologies' },
    { number: '9+', label: 'Projects Completed' },
    { number: '300+', label: 'Students Mentored' },
  ];

  return (
    <section id="hero" className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/30 to-red-500/20 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-red-400/30 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/10 to-red-500/15 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Greeting with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-red-400"
              >
                <Sparkles className="h-5 w-5" />
                <span className="text-lg font-medium">Hello, I'm</span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-red-600 via-red-900 to-red-700 bg-clip-text text-transparent">
                    Apurbo Barua
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xl sm:text-2xl text-red-400 font-semibold">
                    Aspiring Software Engineer
                  </p>
                  <p className="text-lg text-white">
                    CS @ University of Arizona | AI/ML Enthusiast | Full-Stack Developer | Teaching Assistant
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                <p className="text-lg text-white leading-relaxed max-w-2xl">
                  I'm passionate about solving real-world problems through software engineering and AI. 
                  I build full-stack web applications, visualize data to uncover hidden trends, and create 
                  engaging learning experiences for students.
                </p>
                
                <div className="bg-black/70 border border-red-500/20 p-6 rounded-xl">
                  <div className="p-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                      <span style={{color: '#ffffff', fontSize: '16px', fontWeight: '500', display: 'inline-block'}}>
                        Actively seeking Summer 2025 internships in
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Software Engineering', 'AI/ML', 'Data Science'].map((field) => (
                        <span
                          key={field}
                          className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-sm font-medium"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full btn-modern hover-lift group"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 rounded-full btn-modern hover-lift group"
                >
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex space-x-6 pt-4"
              >
                {[
                  { Icon: Linkedin, href: 'https://linkedin.com/in/apurbo-barua', label: 'LinkedIn' },
                  { Icon: Github, href: 'https://github.com/apurbo-barua', label: 'GitHub' },
                  { Icon: Mail, href: 'mailto:apurbo@arizona.edu', label: 'Email' }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 flex items-center justify-center glass border border-red-500/20 rounded-full text-muted-foreground hover:text-red-400 hover:border-red-500/40 transition-all duration-300 hover-lift group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 w-80 h-80 border border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 w-72 h-72 border border-red-400/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Main image container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden glass-card border-2 border-red-500/30 p-2 hover-lift">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-red-500/10 to-red-600/20">
                    {!imageError ? (
                      <img
                        src="/apurbo.jpeg"
                        alt="Apurbo Barua"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/30 flex items-center justify-center">
                        <span className="text-6xl font-bold text-red-400">AB</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Discover more</span>
            <div className="w-6 h-10 border-2 border-red-500/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats Section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="glass-card border-red-500/20 hover-lift">
                  <CardContent className="p-6">
                    <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}