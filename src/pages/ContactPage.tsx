import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { contact } from '../utils/supabase/client';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Use the real Supabase contact submission
      await contact.submit({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "apurbo@arizona.edu",
      href: "mailto:apurbo@arizona.edu",
      description: "Best for professional inquiries"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tucson, Arizona",
      href: null,
      description: "Available for local meetups"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/apurbo-barua17",
      href: "https://www.linkedin.com/in/apurbo-barua17/",
      description: "Professional networking"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ApurboBarua17",
      href: "https://github.com/ApurboBarua17",
      description: "Code repositories and projects"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-background to-red-900/20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm actively seeking Summer 2025 internship opportunities in Software Engineering, AI/ML, or Data Science. 
              Let's discuss how I can contribute to your team!
            </p>
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass-card border-green-500/30 bg-green-500/5">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                  <h3 className="text-lg font-semibold text-green-400">Currently Available</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Seeking Summer 2025 internships in Software Engineering, AI/ML, or Data Science
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Software Engineering', 'AI/ML', 'Data Science', 'Full-Stack Development'].map((field) => (
                    <span
                      key={field}
                      className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-medium"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-card border-red-500/20 hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-red-400" />
                    <span>Send Message</span>
                  </CardTitle>
                  <CardDescription className="text-white">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
                      <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-red-500/20 bg-input text-foreground focus:border-red-500 focus:ring-red-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-red-500/20 bg-input text-foreground focus:border-red-500 focus:ring-red-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-red-500/20 bg-input text-foreground focus:border-red-500 focus:ring-red-500"
                          placeholder="Internship Opportunity / Project Collaboration / etc."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="border-red-500/20 bg-input text-foreground focus:border-red-500 focus:ring-red-500 min-h-[120px]"
                          placeholder="Tell me about the opportunity, project, or what you'd like to discuss..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white btn-modern hover-lift"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm excited to explore opportunities where I can contribute my skills in software engineering, 
                  AI/ML, and data science. Whether you're offering an internship, want to collaborate on a project, 
                  or just want to chat about technology, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="group"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block"
                        >
                          <Card className="glass-card border-red-500/20 hover-lift p-6 transition-all duration-300 group-hover:border-red-500/40">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-foreground mb-1">{info.label}</div>
                                <div className="text-red-400 group-hover:text-red-300 transition-colors duration-200 mb-1">
                                  {info.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {info.description}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </a>
                      ) : (
                        <Card className="glass-card border-border p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-muted-foreground/70 to-muted-foreground/60 rounded-lg flex items-center justify-center text-white">
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-foreground mb-1">{info.label}</div>
                              <div className="text-muted-foreground mb-1">{info.value}</div>
                              <div className="text-sm text-muted-foreground">
                                {info.description}
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Response Time Info */}
              <Card className="glass-card border-blue-500/20 bg-blue-500/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>Response Times</span>
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email inquiries:</span>
                      <span className="font-medium text-blue-400">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LinkedIn messages:</span>
                      <span className="font-medium text-blue-400">Same day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Internship opportunities:</span>
                      <span className="font-medium text-green-400">Priority response</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}