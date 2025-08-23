import { motion } from 'framer-motion';
import { Download, Eye, Mail, Phone, MapPin, Linkedin, Github, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function ResumePage() {
  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/APURBO_BARUA.pdf'; // Updated to use your PDF filename
    link.download = 'Apurbo_Barua_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    // Open the PDF in a new tab
    window.open('/APURBO_BARUA.pdf', '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-background to-red-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
              Download my resume or view it online for a comprehensive overview.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3"
              >
                <Download className="mr-2 w-5 h-5" />
                Download PDF
              </Button>
              <Button 
                onClick={handleViewOnline}
                variant="outline" 
                className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3"
              >
                <Eye className="mr-2 w-5 h-5" />
                View Online
              </Button>
            </div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card border-red-500/20 p-8">
              {/* Header Section */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 text-white">Apurbo Barua</h2>
                <p className="text-lg text-red-400 font-medium mb-4">
                  Aspiring Software Engineer | CS Student | AI/ML Enthusiast
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>apurbo@arizona.edu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Tucson, Arizona</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/apurbo-barua</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/apurbo-barua</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-red-500/20 pt-8">
                {/* Education */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Bachelor of Science in Computer Science</h4>
                          <p className="text-white">University of Arizona</p>
                        </div>
                        <span className="text-sm text-white">Expected May 2026</span>
                      </div>
                      <p className="text-sm text-white">
                        Relevant Coursework: Data Structures, Algorithms, Software Engineering, 
                        Machine Learning, Database Systems, Web Development
                      </p>
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Software Engineer Intern</h4>
                          <p className="text-red-300">EduTrend</p>
                        </div>
                        <span className="text-sm text-white">Jul 2025 – Present</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-sm space-y-1 ml-4">
                        <li>Developed full-stack applications using React and Node.js</li>
                        <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                        <li>Collaborated with cross-functional teams on product development</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Undergraduate Teaching Assistant</h4>
                          <p className="text-red-300">CS 110 - University of Arizona</p>
                        </div>
                        <span className="text-sm text-white">Dec 2023 – Present</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-sm space-y-1 ml-4">
                        <li>Mentored 300+ students in programming fundamentals</li>
                        <li>Designed interactive dashboards reducing failure rate by 22%</li>
                        <li>Conducted weekly lab sessions and office hours</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Resident Assistant</h4>
                          <p className="text-red-300">University of Arizona</p>
                        </div>
                        <span className="text-sm text-white">Aug 2024 – Present</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-sm space-y-1 ml-4">
                        <li>Led 'Late-Night Study Hub' with 35+ weekly attendees</li>
                        <li>Resolved student disputes and crisis situations</li>
                        <li>Boosted event participation by 65% through innovative programming</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Express', 'Django', 'Flask', 'TailwindCSS'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Firebase'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Key Projects</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white">RAG Chatbot</h4>
                      <p className="text-white text-sm">
                        End-to-end NLP pipeline for PDF, CSV, and web ingestion with semantic search capabilities 
                        using Python, LangChain, and PyTorch.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Website Status Checker</h4>
                      <p className="text-white text-sm">
                        Real-time uptime monitoring tool with dashboard analytics and alert systems 
                        using JavaScript, REST APIs, and Chart.js.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Food Rescue Campus Connect</h4>
                      <p className="text-white text-sm">
                        Platform for redistributing surplus food on campus with real-time matching 
                        using TypeScript, Firebase, and React.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}