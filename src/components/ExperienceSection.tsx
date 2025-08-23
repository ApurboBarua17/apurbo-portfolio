import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "EduTrend",
    location: "Remote",
    duration: "Jul 2025 – Present",
    description: "Building and deploying scalable software solutions using modern development practices and cloud technologies.",
    achievements: [
      "Developed full-stack applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Collaborated with cross-functional teams on product development"
    ],
    current: true
  },
  {
    title: "Resident Assistant",
    company: "University of Arizona",
    location: "Tucson, AZ",
    duration: "Aug 2024 – Present",
    description: "Leadership role managing residential community and student development programs.",
    achievements: [
      "Led 'Late-Night Study Hub' with 35+ weekly attendees",
      "Resolved student disputes and crisis situations",
      "Boosted event participation by 65% through innovative programming"
    ],
    current: true
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "CS 110 - University of Arizona",
    location: "Tucson, AZ",
    duration: "Dec 2023 – Present",
    description: "Supporting computer science education for introductory programming courses.",
    achievements: [
      "Mentored 300+ students in programming fundamentals",
      "Designed interactive dashboards reducing failure rate by 22%",
      "Conducted weekly lab sessions and office hours"
    ],
    current: true
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Math 100 - University of Arizona",
    location: "Tucson, AZ",
    duration: "Sep 2023 – Dec 2023",
    description: "Facilitated learning sessions for diverse student populations in mathematics.",
    achievements: [
      "Mentored 300+ students in mathematical concepts",
      "Developed inclusive teaching strategies",
      "Improved student engagement through interactive sessions"
    ],
    current: false
  },
  {
    title: "Scholarship Chair",
    company: "Delta Chi Fraternity",
    location: "Tucson, AZ",
    duration: "Nov 2023 – Present",
    description: "Leading academic programs and coordinating educational initiatives for fraternity members.",
    achievements: [
      "Coordinated tutoring programs for members",
      "Implemented academic tracking systems",
      "Organized study groups and academic workshops"
    ],
    current: true
  },
  {
    title: "Concession Cashier",
    company: "Aramark",
    location: "Tucson, AZ",
    duration: "Oct 2022 – May 2023",
    description: "Delivered excellent customer service in high-volume food service environment.",
    achievements: [
      "Handled cash transactions with 99.5% accuracy",
      "Maintained food safety standards",
      "Provided exceptional customer service during events"
    ],
    current: false
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience Timeline
          </h2>
          <p className="text-lg text-gray-600">
            My journey through software engineering, education, and leadership roles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.duration}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative ml-16"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 rounded-full border-4 border-white ${
                  experience.current ? 'bg-blue-500 pulse-glow' : 'bg-blue-300'
                } shadow-lg`}></div>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-white">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-blue-300 font-medium">
                          {experience.company}
                        </CardDescription>
                      </div>
                      {experience.current && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 w-fit">
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-white">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-white leading-relaxed">
                      {experience.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-white flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-300" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}