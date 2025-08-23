import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Globe, GitBranch, Award, Trophy, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C", "R", "MATLAB", "JavaScript", "TypeScript"],
    color: "red"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "HTML", "CSS", "Express", "Flask", "Gradio"],
    color: "orange"
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "SQL", "AWS Lambda", "CloudWatch", "EC2", "S3", "IAM", "SES"],
    color: "blue"
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: ["LangChain", "PyTorch", "Scikit-learn", "Pandas", "Data Visualization", "Machine Learning"],
    color: "purple"
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Firebase", "Cloud Functions", "Cloud Storage"],
    color: "cyan"
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Jupyter", "Canvas API", "REST APIs"],
    color: "green"
  }
];

const awards = [
  {
    title: "Global Wildcat Scholarship",
    description: "Merit-based scholarship recognizing academic excellence and potential",
    icon: Trophy,
    color: "yellow"
  },
  {
    title: "Dean's List (3x)",
    description: "Achieved Dean's List recognition for three consecutive semesters",
    icon: Star,
    color: "blue"
  },
  {
    title: "Academic Year Academic Distinction",
    description: "Recognized for outstanding academic performance throughout the year",
    icon: Award,
    color: "purple"
  },
  {
    title: "Honorable Mention",
    description: "Special recognition for exceptional contributions and achievements",
    icon: Award,
    color: "green"
  },
  {
    title: "Dean's List with Distinction",
    description: "Highest level of academic recognition for exceptional performance",
    icon: Trophy,
    color: "red"
  }
];

export function SkillsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
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
                Technical Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning software engineering, AI/ML, cloud technologies, and data science.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full glass-card border-red-500/20 hover-lift">
                    <CardHeader className="text-center space-y-4">
                      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20 transition-colors duration-200"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Proficiency Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="glass-card border-red-500/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Areas of Expertise
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-red-400">3+</div>
                    <div className="text-muted-foreground">Years of Programming</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-orange-400">15+</div>
                    <div className="text-muted-foreground">Technologies Mastered</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">9+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Awards & Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 text-red-400 mb-4">
                <Trophy className="h-6 w-6" />
                <span className="text-lg font-medium">Academic Excellence</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
                  Awards & Recognition
                </span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition for academic achievements and contributions to the university community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full glass-card border-red-500/20 hover-lift">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className={`inline-flex p-3 rounded-full bg-gradient-to-r from-${award.color}-600 to-${award.color}-500 text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-red-400 transition-colors">
                            {award.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {award.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}