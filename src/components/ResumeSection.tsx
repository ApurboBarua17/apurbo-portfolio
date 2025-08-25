import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/apurbo-portfolio/APURBO_RESUME.pdf'; // Updated with correct PDF path
    link.download = 'Apurbo_Barua_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // In a real application, this would open the PDF in a new tab
    window.open('/apurbo-portfolio/APURBO_RESUME.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600">
            Download my resume or view it online for a comprehensive overview of my experience and skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mx-auto">
                  <FileText className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Professional Resume
                </CardTitle>
                <CardDescription className="text-gray-600">
                  ATS-friendly format optimized for software engineering, AI/ML, and data science roles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">2024</div>
                    <div className="text-sm text-gray-600">Last Updated</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">PDF</div>
                    <div className="text-sm text-gray-600">Format</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Resume Highlights:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Computer Science student at University of Arizona</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Software Engineer Intern at EduTrend</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Teaching Assistant for CS 110 and Math 100</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>9+ technical projects in AI/ML and web development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>IBM Generative AI Certification</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleDownloadResume}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex-1 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button
                    onClick={handleViewResume}
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 flex-1 transition-all duration-300"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Key Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Python", "React", "Node.js", "AWS", "MongoDB", "Machine Learning"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Leadership", "Teaching", "Problem Solving", "Communication", "Teamwork"].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-green-200 text-green-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900">IBM Generative AI Certification</div>
                      <div className="text-sm text-gray-600">Advanced training in LangChain, PyTorch, and AI applications</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900">Teaching Excellence</div>
                      <div className="text-sm text-gray-600">Reduced student failure rate by 22% through innovative teaching methods</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900">Leadership Impact</div>
                      <div className="text-sm text-gray-600">Increased community engagement by 65% as Resident Assistant</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-white">
                    Available for Summer 2025 Internships
                  </div>
                  <div className="text-sm text-white">
                    Software Engineering • AI/ML • Data Science
                  </div>
                  <Button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="mt-3 border-green-300 text-white hover:bg-green-100"
                  >
                    Contact Me
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}