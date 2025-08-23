import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ScrollAnimation, StaggerAnimation } from '../components/ScrollAnimation';
import { projectImages } from '../utils/projectImages';

const projects = [
	{
		id: 1,
		title: 'Delta Chi Alumni Platform',
		description:
			'Nationwide alumni engagement platform connecting 1500+ Delta Chi Fraternity members across the U.S. with comprehensive record management and communication tools.',
		longDescription:
			'Comprehensive alumni engagement platform designed and developed for Delta Chi Fraternity, serving as a nationwide network connecting over 1500 active and graduated alumni members throughout the United States. Built with a robust Django backend and PostgreSQL database for scalable data management, featuring modern responsive UI with Bootstrap and Tailwind CSS. The platform includes sophisticated alumni record management, bulk email communication systems, event coordination tools, and brotherhood preservation features that maintain connections across generations. Demonstrates full-stack development expertise with focus on user experience, database optimization, and large-scale community management.',
		tech: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'JavaScript', 'Email Systems'],
		category: 'Full-Stack',
		githubUrl: '', // No GitHub repo for this deployed project
		liveUrl: 'https://iamkimball.com/',
		featured: true,
		image: projectImages.DeltaChiWebsite,
		imageAlt: 'Delta Chi alumni platform showing member dashboard and engagement features',
	},
	{
		id: 2,
		title: 'RAG Chatbot',
		description:
			'End-to-end NLP pipeline for PDF, CSV, and web ingestion with semantic search capabilities using advanced AI models and vector databases.',
		longDescription:
			'Built a sophisticated Retrieval-Augmented Generation chatbot that can process multiple document formats and provide contextual responses. Features include document parsing, embedding generation, semantic search, and conversational AI capabilities.',
		tech: ['Python', 'LangChain', 'PyTorch', 'IBM Slate', 'Vector DB', 'FastAPI'],
		category: 'AI/ML',
		githubUrl: 'https://github.com/ApurboBarua17/RAG_chatbot',
		liveUrl: '#',
		featured: true,
		image: projectImages.ragChatbot,
		imageAlt: 'RAG Chatbot interface showing document processing',
	},
	{
		id: 3,
		title: 'Website Status Checker',
		description:
			'Real-time uptime monitoring tool with dashboard analytics, alert systems, and performance metrics tracking.',
		longDescription:
			'Comprehensive monitoring solution that tracks website availability, response times, and performance metrics. Includes email notifications, historical data visualization, and multi-region monitoring capabilities.',
		tech: ['HTML', 'JavaScript', 'REST APIs', 'Chart.js', 'Node.js'],
		category: 'Web Development',
		githubUrl: 'https://github.com/ApurboBarua17/Website_status_checker',
		liveUrl: '#',
		image: projectImages.websiteChecker,
		imageAlt: 'Website status dashboard with uptime metrics',
	},
	{
		id: 3,
		title: 'Sort Visualizer',
		description:
			'Interactive educational tool with animated visualizations of sorting algorithms and complexity analysis.',
		longDescription:
			'Educational platform that helps students understand sorting algorithms through interactive visualizations. Features step-by-step animations, complexity comparisons, and customizable data sets.',
		tech: ['Python', 'Pygame', 'Algorithms', 'Data Structures'],
		category: 'Education',
		githubUrl: 'https://github.com/ApurboBarua17/Sort_visualizer',
		liveUrl: 'https://algovizualization.vercel.app/',
		featured: true,
		image: projectImages.algovizSortingAlgo,
		imageAlt: 'Sorting algorithm visualization with animated bars',
	},
	{
		id: 4,
		title: 'RecipeHub',
		description:
			'Social platform for recipe sharing with user authentication, ratings, reviews, and community features.',
		longDescription:
			'Full-stack social platform where users can share recipes, rate dishes, write reviews, and connect with other cooking enthusiasts. Features user profiles, recipe collections, and ingredient shopping lists.',
		tech: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
		category: 'Full-Stack',
		githubUrl: 'https://github.com/apurbo-barua/recipe-hub', // You can update this later
		liveUrl: '#',
		image: projectImages.recipeSharing_Hub,
		imageAlt: 'RecipeHub social platform showing recipe sharing interface',
	},
	{
		id: 5,
		title: 'Socioeconomic Impact Analysis',
		description:
			'Machine learning analysis of arrest patterns with data visualization and predictive modeling capabilities.',
		longDescription:
			'Comprehensive data analysis project using machine learning to identify socioeconomic factors affecting arrest patterns. Includes data preprocessing, feature engineering, model training, and interactive visualizations.',
		tech: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
		category: 'Data Science',
		githubUrl: 'https://github.com/ApurboBarua17/Socioeconomic-Impact-on-Arrest-Patterns-A-Machine_Learning_Analysis',
		liveUrl: '#',
		featured: true,
		image: projectImages.socioeconimic_project,
		imageAlt: 'Data visualization charts showing socioeconomic patterns',
	},
	{
		id: 6,
		title: 'Food Rescue Campus Connect',
		description:
			'Platform for redistributing surplus food on campus with real-time matching and impact tracking.',
		longDescription:
			'Social impact platform that connects food donors with recipients on campus. Features real-time notifications, pickup scheduling, impact metrics, and gamification elements to encourage participation.',
		tech: ['TypeScript', 'Firebase', 'React', 'Cloud Functions', 'Maps API'],
		category: 'Social Impact',
		githubUrl: 'https://github.com/ApurboBarua17/food-rescue-campus-connect-85d23610',
		liveUrl: '#',
		image: projectImages.campusFood,
		imageAlt: 'Food rescue platform showing donation matching interface',
	},
	{
		id: 7,
		title: '2048 Game',
		description:
			'Complete 2048 game implementation with modular architecture, featuring backend logic, GUI frontend, and comprehensive test coverage.',
		longDescription:
			'Full-featured 2048 game built with Java using a modular three-package architecture. Features include complete game logic with tile merging algorithms, movement calculations, win/lose condition detection, and score management. The project includes both GUI and console interfaces, comprehensive JUnit test cases achieving 90%+ coverage, and clean separation between frontend and backend components.',
		tech: ['Java', 'Swing', 'JUnit', 'OOP', 'MVC Architecture', 'GUI Development'],
		category: 'Game Development',
		githubUrl: 'https://github.com/ApurboBarua17/2040',
		liveUrl: '#',
		featured: true,
		image: projectImages.game2048,
		imageAlt: '2048 game interface showing numbered tiles and game grid',
	},
	{
		id: 8,
		title: 'Pomodoro Timer 🍅',
		description:
			'Retro pixel-art style Pomodoro Timer with ambient sounds, Lofi music, and session tracking to boost productivity during study or work sessions.',
		longDescription:
			'A feature-rich Pomodoro Timer designed with a charming retro pixel-art aesthetic. Combines productivity techniques with relaxing audio experiences including customizable Lofi music selection and ambient background sounds (Rain, Forest, Cafe). Features customizable work/break durations, session tracking with detailed history monitoring, and intuitive timer controls. Built with React.js for responsive user interaction and includes comprehensive audio management with free-to-use music libraries.',
		tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Audio APIs', 'UI/UX Design'],
		category: 'Web Development',
		githubUrl: 'https://github.com/ApurboBarua17/Pomodoro_timer_react',
		liveUrl: '#',
		featured: true,
		image: projectImages.pixelPomodoro,
		imageAlt: 'Pomodoro timer interface with retro pixel art design and audio controls',
	},
	{
		id: 9,
		title: 'Digital Whiteboard',
		description:
			'Interactive digital canvas built with React & TypeScript using Vite. Features drawing tools, shape creation, theme switching, and responsive design.',
		longDescription:
			'A comprehensive digital whiteboard application offering a smooth, interactive canvas experience. Built with modern React and TypeScript for type safety and performance optimization using Vite. Features include freehand drawing with pen tools, geometric shape creation (Rectangle, Circle, Triangle), customizable color picker for personalized drawing, eraser functionality, dark/light theme toggle for user preference, and complete canvas clearing options. Designed with responsive UI principles to ensure seamless functionality across different screen sizes and devices.',
		tech: ['React.js', 'TypeScript', 'Vite', 'Canvas API', 'CSS3', 'Responsive Design', 'UI/UX'],
		category: 'Web Development',
		githubUrl: 'https://github.com/ApurboBarua17/digi_whiteboard',
		liveUrl: '#',
		featured: true,
		image: projectImages.digiWhiteboard,
		imageAlt: 'Digital whiteboard interface showing drawing tools and canvas with theme toggle',
	},
	{
		id: 10,
		title: 'BookVlog - Book Review Website',
		description:
			'Community-driven book review platform with user authentication, themed backgrounds, and social sharing features for book enthusiasts.',
		longDescription:
			'A comprehensive book review and community platform called "BookVlog" that allows users to share book reviews and stories. Built with vanilla JavaScript for the frontend and Node.js for the backend, featuring user registration and authentication, post creation with review and story categories, dynamic theme switching with multiple gradient backgrounds, real-time post loading and display, and JSON-based data persistence. The platform demonstrates full-stack web development skills including asynchronous programming, file I/O operations, HTTP server creation, and responsive design. Perfect for book enthusiasts to connect and share their reading experiences.',
		tech: ['Node.js', 'JavaScript', 'HTML5', 'CSS3', 'JSON', 'HTTP Server', 'Asynchronous Programming', 'File I/O'],
		category: 'Full-Stack',
		githubUrl: 'https://github.com/ApurboBarua17/Book_review_website',
		liveUrl: '#',
		featured: true,
		image: projectImages.bookReview,
		imageAlt: 'BookVlog platform showing book review interface with community posts and theme selection',
	},
	{
		id: 11,
		title: 'Huffman Encoding Messenger',
		description:
			'Advanced messaging application with Huffman compression algorithm, featuring JavaFX GUI, real-time encoding/decoding, and Observer pattern implementation.',
		longDescription:
			'Sophisticated messaging system that demonstrates advanced computer science concepts through practical application. Built with JavaFX for an intuitive graphical interface, the application implements the Huffman coding algorithm for efficient message compression and decompression. Features real-time message encoding before transmission, automated decoding upon receipt, and robust Observer pattern implementation for efficient event handling. Includes comprehensive unit testing to ensure encoding/decoding accuracy and reliability. Perfect demonstration of algorithm implementation, GUI development, and software design patterns.',
		tech: ['Java', 'JavaFX', 'Huffman Algorithm', 'Observer Pattern', 'JUnit', 'GUI Development', 'Data Compression'],
		category: 'Education',
		githubUrl: 'https://github.com/ApurboBarua17/Huffman_encoding',
		liveUrl: '#',
		featured: true,
		image: projectImages.huffmanEncoding,
		imageAlt: 'Huffman encoding messenger interface showing compression algorithm in action',
	},
];

const categories = [
	'All',
	'AI/ML',
	'Web Development',
	'Data Science',
	'Full-Stack',
	'Education',
	'Game Development',
	'Social Impact',
];

export function PortfolioPage() {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const filteredProjects = projects.filter((project) => {
		return selectedCategory === 'All' || project.category === selectedCategory;
	});

	const featuredProjects = projects.filter((p) => p.featured);

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
								My Portfolio
							</span>
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							A showcase of projects spanning software engineering, AI/ML, and data
							science. Each project represents a unique challenge solved with modern
							technologies.
						</p>
					</motion.div>

					{/* Filter Controls */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-12"
					>
						<div className="flex justify-center">
							<div className="flex items-center space-x-2">
								<Filter className="h-4 w-4 text-muted-foreground" />
								<div className="flex flex-wrap gap-2 justify-center">
									{categories.map((category) => (
										<Button
											key={category}
											size="sm"
											variant={
												selectedCategory === category ? 'default' : 'outline'
											}
											onClick={() => setSelectedCategory(category)}
											className={
												selectedCategory === category
													? 'bg-red-600 hover:bg-red-700 text-white'
													: 'border-red-500/30 text-muted-foreground hover:text-red-400 hover:bg-red-500/10'
											}
										>
											{category}
										</Button>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Featured Projects */}
			{selectedCategory === 'All' && (
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.h2
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold text-foreground mb-12"
						>
							Featured Projects
						</motion.h2>

						<div className="grid lg:grid-cols-2 gap-8 mb-16">
							{featuredProjects.slice(0, 2).map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="group"
								>
									<Card className="overflow-hidden glass-card border-red-500/20 hover-lift h-full">
										<div className="aspect-video relative overflow-hidden">
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="absolute top-4 left-4">
												<Badge className="bg-red-600 text-white">Featured</Badge>
											</div>
											<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
												<Button
													size="sm"
													variant="secondary"
													className="bg-card/90"
												>
													<Github className="h-4 w-4" />
												</Button>
												<Button
													size="sm"
													variant="secondary"
													className="bg-card/90"
												>
													<ExternalLink className="h-4 w-4" />
												</Button>
											</div>
										</div>

										<CardHeader>
											<div className="flex items-center justify-between">
												<Badge
													variant="outline"
													className="border-red-500/50 text-red-400"
												>
													{project.category}
												</Badge>
												<Code2 className="h-5 w-5 text-red-400" />
											</div>
											<CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">
												{project.title}
											</CardTitle>
											<CardDescription className="text-white leading-relaxed">
												{project.longDescription}
											</CardDescription>
										</CardHeader>

										<CardContent>
											<div className="flex flex-wrap gap-2">
												{project.tech.map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="bg-red-500/10 text-white border-red-500/30 text-xs"
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
					</div>
				</section>
			)}

			{/* All Projects Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-3xl font-bold text-foreground mb-12"
					>
						{selectedCategory === 'All'
							? 'All Projects'
							: `${selectedCategory} Projects`}
					</motion.h2>

					<AnimatePresence>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project, index) => (
								<motion.div
									key={project.id}
									layout
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									className="group"
								>
									<Card className="h-full glass-card border-red-500/20 hover-lift transition-all duration-300 overflow-hidden">
										{/* Project Image */}
										<div className="relative h-48 overflow-hidden">
											<img
												src={project.image}
												alt={project.imageAlt}
												className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
												onError={(e) => {
													// Fallback to placeholder if image fails to load
													const target = e.target as HTMLImageElement;
													target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+';
												}}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											
											{/* Action buttons overlay */}
											<div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												{project.githubUrl && (
													<Button
														size="sm"
														variant="secondary"
														className="h-8 w-8 p-0 bg-background/80 hover:bg-background text-white border-red-500/30"
														onClick={() => window.open(project.githubUrl, '_blank')}
														title="View on GitHub"
													>
														<Github className="h-4 w-4" />
													</Button>
												)}
												{project.liveUrl !== '#' && (
													<Button
														size="sm"
														variant="secondary"
														className="h-8 w-8 p-0 bg-background/80 hover:bg-background text-white border-red-500/30"
														onClick={() => window.open(project.liveUrl, '_blank')}
														title={project.title === 'Delta Chi Alumni Platform' ? 'Visit Website' : 'View Live Demo'}
													>
														<ExternalLink className="h-4 w-4" />
													</Button>
												)}
											</div>
										</div>

										<CardHeader className="space-y-4">
											<div className="flex items-center justify-between">
												<Badge
													variant="outline"
													className="text-xs border-red-500/50 text-red-400"
												>
													{project.category}
												</Badge>
												<Code2 className="h-5 w-5 text-red-400" />
											</div>

											<CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">
												{project.title}
											</CardTitle>
											
											<CardDescription className="text-white leading-relaxed">
												{project.description}
											</CardDescription>
										</CardHeader>
										
										<CardContent>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.tech.slice(0, 4).map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="text-xs bg-red-500/10 text-white border-red-500/30"
													>
														{tech}
													</Badge>
												))}
												{project.tech.length > 4 && (
													<Badge
														variant="secondary"
														className="text-xs bg-muted text-white"
													>
														+{project.tech.length - 4} more
													</Badge>
												)}
											</div>

											{/* Action buttons in card footer */}
											<div className="flex space-x-3 pt-2">
												{project.githubUrl && (
													<Button
														size="sm"
														variant="outline"
														className={`${project.liveUrl !== '#' ? 'flex-1' : 'w-full'} border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50`}
														onClick={() => window.open(project.githubUrl, '_blank')}
													>
														<Github className="h-4 w-4 mr-2" />
														GitHub
													</Button>
												)}
												{project.liveUrl !== '#' && (
													<Button
														size="sm"
														variant="outline"
														className={`${project.githubUrl ? 'flex-1' : 'w-full'} border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50`}
														onClick={() => window.open(project.liveUrl, '_blank')}
													>
														<ExternalLink className="h-4 w-4 mr-2" />
														{project.title === 'Delta Chi Alumni Platform' ? 'Visit Website' : 'Live Demo'}
													</Button>
												)}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</AnimatePresence>

					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-center py-12"
						>
							<Code2 className="h-16 w-16 text-white mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-white mb-2">
								No projects found
							</h3>
							<p className="text-white">
								Try adjusting your search or filter criteria.
							</p>
						</motion.div>
					)}
				</div>
			</section>
		</div>
	);
}