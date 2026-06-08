import { motion } from 'framer-motion';
import { Download, Eye, Mail, Phone, MapPin, Linkedin, Github, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function ResumePage() {
  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/apurbo-portfolio/APURBO_RESUME.pdf'; // Updated to use your PDF filename with the correct path
    link.download = 'Apurbo_Barua_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    // Open the PDF in a new tab
    window.open('/apurbo-portfolio/APURBO_RESUME.pdf', '_blank');
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
            className="max-w-5xl mx-auto"
          >
            <Card className="glass-card border-red-500/20 p-10 sm:p-12 text-lg">
              {/* Header Section */}
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold mb-2 text-white">Apurbo Barua</h2>
                <p className="text-2xl text-red-400 font-medium mb-4">
                  Software Engineer | CS Graduate @ University of Arizona | AI/ML Engineer
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-lg text-white">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>apurboctgs11@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Tucson, Arizona</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/apurbo-barua17</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/ApurboBarua17</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-red-500/20 pt-8">
                {/* Education */}
                <section className="mb-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                          <p className="text-lg text-white">University of Arizona</p>
                        </div>
                        <span className="text-lg text-white">Graduated May 2026</span>
                      </div>
                      <p className="text-lg text-white">
                        Relevant Coursework: Data Structures, Algorithms, Software Engineering,
                        Machine Learning, Database Systems, Web Development
                      </p>
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Software Engineer Intern</h4>
                          <p className="text-lg text-red-300">PwC (through Eller Immersion Project Office / EPO)</p>
                        </div>
                        <span className="text-lg text-white">Jan 2026 – May 2026</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
                        <li>Architected a full-stack workforce planning platform (React, TypeScript, Node.js, AWS RDS PostgreSQL) consolidating 5 enterprise systems into a unified dashboard, deployed on AWS EC2</li>
                        <li>Built an agentic AI chatbot using Claude 3 Haiku via AWS Bedrock with a dual-pass engine that generates and executes live SQL</li>
                        <li>Developed an XGBoost model with SHAP explainability to predict project extension risk</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Software Engineer Intern</h4>
                          <p className="text-lg text-red-300">EduTrend (Quanticore LLC)</p>
                        </div>
                        <span className="text-lg text-white">Aug 2025 – Dec 2025</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
                        <li>Designed GraphQL schemas, resolvers, and MongoDB service layers in a TypeScript mobile backend</li>
                        <li>Built secure auth and role-based access control using Clerk with OAuth login flows</li>
                        <li>Resolved GitHub Actions CI/CD pipeline failures</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Undergraduate Teaching Assistant (CS 110)</h4>
                          <p className="text-lg text-red-300">University of Arizona</p>
                        </div>
                        <span className="text-lg text-white">Jan 2024 – May 2026</span>
                      </div>
                      <ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
                        <li>Built Python automation scripts for grading, cutting manual evaluation time by 10+ hours/week</li>
                        <li>Taught data structures and algorithms to 150+ students per semester</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Express', 'Django', 'FastAPI', 'GraphQL', 'TailwindCSS'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">AI / ML</h4>
                      <div className="flex flex-wrap gap-2">
                        {['XGBoost', 'SHAP', 'scikit-learn', 'PyTorch', 'LangChain', 'RAG', 'Claude API', 'AWS Bedrock', 'Groq (Llama 3)', 'Chroma'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Cloud, Data & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {['AWS (EC2, RDS, Bedrock, Lambda)', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git', 'GitHub Actions', 'Clerk (OAuth)'].map((skill) => (
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
                  <h3 className="text-3xl font-bold text-red-400 mb-4">Key Projects</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Delta Chi Alumni Portal</h4>
                      <p className="text-white text-lg">
                        Full-stack alumni engagement platform serving 1,000+ users, built with Django, PostgreSQL, and modern responsive UI. Live at iamkimball.com.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">UA CS Degree Planner</h4>
                      <p className="text-white text-lg">
                        Retrieval-augmented chatbot that answers UA Computer Science degree-planning questions, grounded in the official catalog and major-map documents. Built with FastAPI, Chroma vector store, and Groq-hosted Llama 3.3 70B.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Website Status Checker</h4>
                      <p className="text-white text-lg">
                        Serverless uptime monitoring tool built on AWS Lambda, API Gateway, and DynamoDB (SAM-deployed) with a React dashboard for real-time status and history.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Tucson Crime Analysis</h4>
                      <p className="text-white text-lg">
                        Statistical analysis of 170,000+ Tucson crime records using chi-square tests and scikit-learn classification models to surface neighborhood-level trends.
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