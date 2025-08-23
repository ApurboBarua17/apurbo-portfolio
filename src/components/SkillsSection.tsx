import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Globe, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C", "R", "MATLAB", "JavaScript", "TypeScript"],
    color: "blue"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "HTML", "CSS", "Express", "Flask", "Gradio"],
    color: "green"
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "SQL", "AWS Lambda", "CloudWatch", "EC2", "S3", "IAM", "SES"],
    color: "purple"
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: ["LangChain", "PyTorch", "Scikit-learn", "Pandas", "Data Visualization", "Machine Learning"],
    color: "orange"
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
    color: "pink"
  }
];

const colorVariants = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  cyan: "from-cyan-500 to-cyan-600",
  pink: "from-pink-500 to-pink-600"
};

const backgroundVariants = {
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200",
  orange: "bg-orange-50 border-orange-200",
  cyan: "bg-cyan-50 border-cyan-200",
  pink: "bg-pink-50 border-pink-200"
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning software engineering, AI/ML, cloud technologies, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full ${backgroundVariants[category.color as keyof typeof backgroundVariants]} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <CardHeader className="text-center space-y-4">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${colorVariants[category.color as keyof typeof colorVariants]} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-white/80 text-gray-700 border-gray-200 hover:bg-white transition-colors duration-200"
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-700">Years of Programming</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-700">Technologies Mastered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">9+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}