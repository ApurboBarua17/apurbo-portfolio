import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: "RAG Chatbot",
    description: "End-to-end NLP pipeline for PDF, CSV, and web ingestion with semantic search capabilities using advanced AI models.",
    tech: ["Python", "LangChain", "PyTorch", "IBM Slate"],
    category: "AI/ML",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Website Status Checker",
    description: "Real-time uptime monitoring tool that tracks website availability and performance metrics.",
    tech: ["HTML", "JavaScript", "REST APIs"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Sort Visualizer",
    description: "Interactive animated visualization of sorting algorithms to help students understand computational complexity.",
    tech: ["Python", "Pygame", "Algorithms"],
    category: "Education",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "RecipeHub",
    description: "Social platform for recipe sharing with user authentication, ratings, and community features.",
    tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Socioeconomic Impact Analysis",
    description: "Data analysis of arrest patterns using machine learning models to identify socioeconomic trends.",
    tech: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
    category: "Data Science",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Huffman Encoding",
    description: "Efficient file compression algorithm implementation with visual tree representation.",
    tech: ["Java", "Data Structures", "Algorithms"],
    category: "Computer Science",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Digital Whiteboard",
    description: "Collaborative online drawing application with real-time synchronization and multiple tools.",
    tech: ["TypeScript", "Canvas API", "WebSocket"],
    category: "Web Development",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Pomodoro Timer",
    description: "Productivity timer application with customizable work and break sessions, progress tracking.",
    tech: ["React", "TypeScript", "Local Storage"],
    category: "Productivity",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Food Rescue Campus Connect",
    description: "Platform for redistributing surplus food on campus to reduce waste and help students in need.",
    tech: ["TypeScript", "Firebase", "React", "Cloud Functions"],
    category: "Social Impact",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export function PortfolioSection() {
  const handleViewProject = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-950/30 via-background to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in software engineering, AI/ML, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform group-hover:-translate-y-2 hover:border-blue-500/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Code2 className="h-6 w-6 text-blue-400" />
                      <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-400">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleViewProject(project.githubUrl)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-400"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleViewProject(project.liveUrl)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open('https://github.com/apurbo-barua', '_blank')}
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View More Projects
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}