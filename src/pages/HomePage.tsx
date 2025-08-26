import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Award, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollAnimation, StaggerAnimation } from '../components/ScrollAnimation';

export function HomePage() {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { number: '3+', label: 'Years Programming' },
    { number: '15+', label: 'Technologies' },
    { number: '9+', label: 'Projects Completed' },
    { number: '600+', label: 'Students Mentored' },
  ];

  const certifications = [
    {
      title: 'IBM Generative AI Engineering Specialization',
      issuer: 'IBM',
      date: 'Jul 2025',
      credentialId: 'JFRCITYL2F8Y',
      logo: '/apurbo-portfolio/ibm-logo.png', // You'll need to add this logo to your public folder
      link: 'https://www.coursera.org/account/accomplishments/specialization/JFRCITYL2F8Y?trk=public_profile_see-credential'
    },
    {
      title: 'Architecting Solutions on AWS',
      issuer: 'Amazon Web Services',
      date: 'Jun 2025',
      credentialId: 'RDY70QW0WKPI',
      logo: '/apurbo-portfolio/aws-logo.png', // You'll need to add this logo to your public folder
      link: 'https://www.coursera.org/account/accomplishments/verify/RDY70QW0WKPI?trk=public_profile_see-credential'
    },
    {
      title: 'AWS Fundamentals',
      issuer: 'Amazon Web Services',
      date: 'Jun 2025',
      credentialId: 'W00TNWDF4MA9',
      logo: '/apurbo-portfolio/aws-logo.png', // You'll need to add this logo to your public folder
      link: 'https://www.coursera.org/account/accomplishments/specialization/W00TNWDF4MA9?trk=public_profile_see-credential'
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                  <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
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
                  <p className="text-lg text-muted-foreground">
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
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  I'm passionate about solving real-world problems through software engineering and AI. 
                  I build full-stack web applications, visualize data to uncover hidden trends, and create 
                  engaging learning experiences for students.
                </p>
                
                <Card className="glass-card border-red-500/20 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                      <p className="text-foreground font-medium">
                        Actively seeking Summer 2026 internships in
                      </p>
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
                  </CardContent>
                </Card>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full btn-modern hover-lift group"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 rounded-full btn-modern hover-lift group"
                  >
                    Get In Touch
                    <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </Button>
                </Link>
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
                      <ImageWithFallback
                        src="/apurbo-portfolio/apurbo.jpeg"
                        alt="Apurbo Barua"
                        className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-500"
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
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" duration={0.8}>
            <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
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
                </div>
              ))}
            </StaggerAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" duration={0.8}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 text-red-400 mb-4">
                <Award className="h-6 w-6" />
                <span className="text-lg font-medium">Professional Certifications</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
                  Industry Recognized Credentials
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Continuously learning and earning certifications in cutting-edge technologies
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" duration={0.8} delay={0.2}>
            <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card border-red-500/20 hover-lift group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-2">
                        <img 
                          src={cert.logo} 
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to text if logo fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.fallback-text')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'fallback-text text-xs font-bold text-gray-800 text-center leading-tight';
                              fallback.textContent = cert.issuer === 'IBM' ? 'IBM' : 'AWS';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-red-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-red-400 font-medium mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Issued {cert.date}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-muted-foreground">
                        Credential ID: <span className="font-mono text-red-400">{cert.credentialId}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 group"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <span>View Credential</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </StaggerAnimation>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}