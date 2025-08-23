import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const experiences = [
	{
		title: 'Software Engineer Intern',
		company: 'EduTrend',
		location: 'Remote',
		duration: 'Jul 2025 – Present',
		description:
			'Building and deploying scalable software solutions using modern development practices and cloud technologies.',
		achievements: [
			'Developed full-stack applications using React and Node.js',
			'Implemented CI/CD pipelines reducing deployment time by 40%',
			'Collaborated with cross-functional teams on product development',
		],
		current: true,
	},
	{
		title: 'Resident Assistant',
		company: 'University of Arizona',
		location: 'Tucson, AZ',
		duration: 'Aug 2024 – Present',
		description: 'Leadership role managing residential community and student development programs.',
		achievements: [
			'Led "Late-Night Study Hub" with 35+ weekly attendees',
			'Resolved student disputes and crisis situations',
			'Boosted event participation by 65% through innovative programming',
		],
		current: true,
	},
	{
		title: 'Undergraduate Teaching Assistant',
		company: 'CS 110 - University of Arizona',
		location: 'Tucson, AZ',
		duration: 'Dec 2023 – Present',
		description: 'Supporting computer science education for introductory programming courses.',
		achievements: [
			'Mentored 300+ students in programming fundamentals',
			'Designed interactive dashboards reducing failure rate by 22%',
			'Conducted weekly lab sessions and office hours',
		],
		current: true,
	},
	{
		title: 'Undergraduate Teaching Assistant',
		company: 'Math 100 - University of Arizona',
		location: 'Tucson, AZ',
		duration: 'Sep 2023 – Dec 2023',
		description: 'Facilitated learning sessions for diverse student populations in mathematics.',
		achievements: [
			'Mentored 300+ students in mathematical concepts',
			'Developed inclusive teaching strategies',
			'Improved student engagement through interactive sessions',
		],
		current: false,
	},
	{
		title: 'Scholarship Chair',
		company: 'Delta Chi Fraternity',
		location: 'Tucson, AZ',
		duration: 'Nov 2023 – Present',
		description: 'Leading academic programs and coordinating educational initiatives for fraternity members.',
		achievements: [
			'Coordinated tutoring programs for members',
			'Implemented academic tracking systems',
			'Organized study groups and academic workshops',
		],
		current: true,
	},
];

export function ExperiencePage() {
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
								My Journey
							</span>
						</h1>
						<p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
							My professional and academic journey through software engineering, education, and leadership roles.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Experience Timeline */}
			<section className="py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-300"></div>

						<div className="space-y-12">
							{experiences.map((experience, index) => (
								<motion.div
									key={`${experience.company}-${experience.duration}`}
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="relative ml-16"
								>
									{/* Timeline dot */}
									<div
										className={`absolute -left-20 top-6 w-4 h-4 rounded-full border-4 border-background ${
											experience.current ? 'bg-red-500 pulse-glow' : 'bg-red-300'
										} shadow-lg`}
									></div>

									<Card className="glass-card border-red-500/20 hover-lift">
										<CardHeader className="space-y-4">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
												<div>
													<CardTitle className="text-xl text-white">
														{experience.title}
													</CardTitle>
													<CardDescription className="text-red-400 font-medium text-lg">
														{experience.company}
													</CardDescription>
												</div>
												{experience.current && (
													<Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
														<div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
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
													<Award className="h-4 w-4 text-red-400" />
													<span>Key Achievements</span>
												</h4>
												<ul className="space-y-2">
													{experience.achievements.map((achievement, idx) => (
														<li key={idx} className="flex items-start space-x-3">
															<div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
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

					{/* Summary Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-16"
					>
						<Card className="glass-card border-red-500/20">
							<CardHeader className="text-center">
								<CardTitle className="text-2xl text-white flex items-center justify-center space-x-2">
									<TrendingUp className="h-6 w-6 text-red-400" />
									<span>Career Impact</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-6 text-center">
									<div className="space-y-2">
										<div className="text-3xl font-bold text-red-400">600+</div>
										<div className="text-white">Students Mentored</div>
									</div>
									<div className="space-y-2">
										<div className="text-3xl font-bold text-green-400">65%</div>
										<div className="text-white">Event Participation Increase</div>
									</div>
									<div className="space-y-2">
										<div className="text-3xl font-bold text-blue-400">22%</div>
										<div className="text-muted-foreground">Reduction in Failure Rate</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>
		</div>
	);
}