import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, Mail, Phone, MapPin, Linkedin, Github, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

type ResumeMode = 'swe' | 'ml';

const resumeConfig = {
	swe: {
		pdfPath: '/apurbo-portfolio/RESUME_APURBO_SWE_GRAD.pdf',
		downloadName: 'Apurbo_Barua_SWE_Resume.pdf',
		subtitle: 'Software Engineer | CS Graduate @ University of Arizona | Full-Stack Developer',
		skills: [
			{
				category: 'Languages',
				items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
			},
			{
				category: 'Backend & APIs',
				items: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST APIs', 'GraphQL', 'Microservices'],
			},
			{
				category: 'Frontend',
				items: ['React', 'React Native', 'Expo', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
			},
			{
				category: 'Databases & Cloud',
				items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'AWS (Lambda, API Gateway, EC2, S3, SAM, IAM)'],
			},
			{
				category: 'DevOps & Systems',
				items: ['Docker', 'Kubernetes', 'KEDA', 'Git', 'GitHub Actions (CI/CD)', 'Linux/Unix', 'Agile/Scrum', 'CloudWatch'],
			},
			{
				category: 'AI Integration',
				items: ['LLMs', 'RAG', 'LangChain', 'AWS Bedrock', 'OpenAI/GitHub Models'],
			},
		],
		experienceBullets: {
			pwc: [
				'Architected a full-stack workforce planning platform (React, TypeScript, Node.js, AWS RDS PostgreSQL) consolidating 5 enterprise systems into a unified dashboard with 5 analytical modules, deployed on AWS EC2.',
				'Built an AI chatbot using Claude 3 Haiku via AWS Bedrock with a dual-pass engine that generates and executes live SQL against PostgreSQL, enabling stakeholders to query data in plain English.',
				'Designed and integrated an ML prediction pipeline into the platform\'s dashboard and REST API layer to surface project delivery risk for staffing decisions.',
			],
		},
		projects: [
			{
				title: 'Delta Chi Alumni Portal',
				link: 'iamkimball.com',
				bullets: [
					'Architected a centralized alumni networking platform using Django, PostgreSQL, and JavaScript, replacing fragmented Facebook groups to help the Arizona chapter facilitate job sourcing, donations, and newsletters.',
					'Deployed the application to production on PythonAnywhere, ensuring secure role-based access and reliable uptime for 1,000+ active users.',
				],
			},
			{
				title: 'ResellIQ',
				link: 'github.com/ApurboBarua17/ResellIQ',
				bullets: [
					'Architected a resale pricing tool using React, FastAPI, PostgreSQL, and Redis that pulls live eBay and Discogs listings to help resellers price items before listing.',
					'Integrated GPT-4o-mini to generate recommended asking prices and ready-to-paste listing descriptions from live marketplace data, deployed on a Kubernetes backend.',
				],
			},
			{
				title: 'AgriSense',
				link: 'github.com/ApurboBarua17/AgriSense',
				bullets: [
					'Built a crop-disease detection app using HuggingFace, PyTorch, and GPT-4o-mini that identifies plant diseases from a photo and generates a USDA-backed treatment plan for farmers.',
					'Deployed 5 FastAPI microservices on Kubernetes with Redis and Meta Prophet to serve real-time disease diagnosis and market price forecasts for crop sell-or-treat decisions.',
				],
			},
			{
				title: 'Website Status Checker',
				link: 'github.com/ApurboBarua17/Website_status_checker',
				bullets: [
					'Built a serverless uptime dashboard using React, AWS Lambda, and DynamoDB that executes concurrent Python diagnostic checks to monitor multi-region HTTP and DNS health.',
					'Provisioned the backend cloud infrastructure with AWS SAM, exposing RESTful APIs to track and report real-time network reliability.',
				],
			},
		],
	},
	ml: {
		pdfPath: '/apurbo-portfolio/RESUME_APURBO_ML_GRAD.pdf',
		downloadName: 'Apurbo_Barua_ML_Resume.pdf',
		subtitle: 'AI/ML Engineer | CS Graduate @ University of Arizona | Data Scientist',
		skills: [
			{
				category: 'AI/ML',
				items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Meta Prophet', 'Hugging Face', 'LangChain', 'RAG', 'LLMs', 'Pandas'],
			},
			{
				category: 'Languages',
				items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
			},
			{
				category: 'Backend & APIs',
				items: ['FastAPI', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'GraphQL', 'Microservices'],
			},
			{
				category: 'Frontend',
				items: ['Streamlit', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
			},
			{
				category: 'Databases & Cloud',
				items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'AWS (Lambda, API Gateway, EC2, S3, IAM)', 'Azure'],
			},
			{
				category: 'DevOps & Systems',
				items: ['Docker', 'Kubernetes', 'KEDA', 'Git', 'GitHub Actions (CI/CD)', 'Linux/Unix', 'CloudWatch'],
			},
		],
		experienceBullets: {
			pwc: [
				'Built an agentic AI chatbot using Claude 3 Haiku via AWS Bedrock with a dual-pass engine that generates and executes live SQL, enabling stakeholders to query workforce data in plain English.',
				'Developed an XGBoost model with SHAP explainability to predict project extension risk, surfacing operational drivers behind delivery delays for proactive staffing decisions.',
				'Architected a full-stack workforce planning platform (React, TypeScript, Node.js, AWS RDS PostgreSQL) consolidating 5 enterprise systems into a unified dashboard, deployed on AWS EC2.',
			],
		},
		projects: [
			{
				title: 'AgriSense',
				link: 'github.com/ApurboBarua17/AgriSense',
				bullets: [
					'Built a crop-disease detection app using HuggingFace, PyTorch, and GPT-4o-mini that identifies plant diseases from a photo and generates a USDA-backed treatment plan for farmers.',
					'Deployed 5 FastAPI microservices on Kubernetes with Redis and Meta Prophet to serve real-time disease diagnosis and market price forecasts for crop sell-or-treat decisions.',
				],
			},
			{
				title: 'UA CS Degree Planner',
				link: 'github.com/ApurboBarua17/RAG_chatbot',
				bullets: [
					'Engineered a RAG-powered academic advising app using FastAPI, Groq (Llama 3), and ChromaDB that bypasses weeks of advising wait times by instantly guiding students through specific CS course tracks.',
					'Implemented prompt-engineered guardrails and tested outputs with real students to actively reduce AI hallucinations; deployed via Vercel and Hugging Face Spaces.',
				],
			},
			{
				title: 'Tucson Crime Analysis',
				link: 'github.com/ApurboBarua17/tucson-crime-analysis',
				bullets: [
					'Analyzed 170,000+ municipal records using Python, Pandas, and scikit-learn, proving that incidents actually peak during daytime hours near retail and park locations rather than at night.',
					'Trained Random Forest and Logistic Regression models to forecast high-risk spatial and temporal zones, providing actionable insights for optimal police surveillance scheduling.',
				],
			},
			{
				title: 'ResellIQ',
				link: 'github.com/ApurboBarua17/ResellIQ',
				bullets: [
					'Architected a resale pricing tool using React, FastAPI, PostgreSQL, and Redis that pulls live eBay and Discogs listings to help resellers price items before listing.',
					'Integrated GPT-4o-mini to generate recommended asking prices and ready-to-paste listing descriptions from live marketplace data, deployed on a Kubernetes and Docker backend.',
				],
			},
		],
	},
};

export function ResumePage() {
	const [mode, setMode] = useState<ResumeMode>('swe');
	const config = resumeConfig[mode];

	const handleDownloadPDF = () => {
		const link = document.createElement('a');
		link.href = config.pdfPath;
		link.download = config.downloadName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleViewOnline = () => {
		window.open(config.pdfPath, '_blank');
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

						{/* SWE / ML Toggle */}
						<div className="flex justify-center mb-8">
							<div className="inline-flex items-center glass-card border border-red-500/30 rounded-full p-1">
								<button
									onClick={() => setMode('swe')}
									className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
										mode === 'swe'
											? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
											: 'text-muted-foreground hover:text-white'
									}`}
								>
									Software Engineering
								</button>
								<button
									onClick={() => setMode('ml')}
									className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
										mode === 'ml'
											? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
											: 'text-muted-foreground hover:text-white'
									}`}
								>
									Machine Learning / AI
								</button>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								onClick={handleDownloadPDF}
								className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3"
							>
								<Download className="mr-2 w-5 h-5" />
								Download {mode === 'swe' ? 'SWE' : 'ML'} PDF
							</Button>
							<Button
								onClick={handleViewOnline}
								variant="outline"
								className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3"
							>
								<Eye className="mr-2 w-5 h-5" />
								View {mode === 'swe' ? 'SWE' : 'ML'} Online
							</Button>
						</div>
					</motion.div>

					{/* Resume Content */}
					<AnimatePresence mode="wait">
						<motion.div
							key={mode}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className="max-w-5xl mx-auto"
						>
							<Card className="glass-card border-red-500/20 p-10 sm:p-12 text-lg">
								{/* Header Section */}
								<div className="text-center mb-8">
									<h2 className="text-5xl font-bold mb-2 text-white">Apurbo Barua</h2>
									<p className="text-2xl text-red-400 font-medium mb-4">
										{config.subtitle}
									</p>

									<div className="flex flex-wrap justify-center gap-6 text-lg text-white">
										<div className="flex items-center gap-2">
											<Mail className="w-4 h-4" />
											<span>apurbobarua@arizona.edu</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4" />
											<span>Tucson, AZ | Open to Remote & Relocation</span>
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
														<p className="text-lg text-white">University of Arizona · Minor in Business Administration · GPA: 3.51/4.00</p>
													</div>
													<span className="text-lg text-white whitespace-nowrap ml-4">Aug 2022 – May 2026</span>
												</div>
												<p className="text-lg text-white">
													Honors: Dean's List, Academic Distinction, Wildcat Excellence Scholarship
												</p>
												<p className="text-lg text-white">
													Leadership: Chairperson of Academic Excellence, Delta Chi Fraternity
												</p>
											</div>
										</div>
									</section>

									{/* Skills */}
									<section className="mb-8">
										<h3 className="text-3xl font-bold text-red-400 mb-4">Technical Skills</h3>
										<div className="space-y-4">
											{config.skills.map((skillGroup) => (
												<div key={skillGroup.category}>
													<h4 className="text-xl font-medium text-white mb-2">{skillGroup.category}</h4>
													<div className="flex flex-wrap gap-2">
														{skillGroup.items.map((skill) => (
															<Badge key={skill} variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/30">
																{skill}
															</Badge>
														))}
													</div>
												</div>
											))}
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
														<p className="text-lg text-red-300">PwC (Tucson, AZ)</p>
													</div>
													<span className="text-lg text-white whitespace-nowrap ml-4">Jan 2026 – May 2026</span>
												</div>
												<ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
													{config.experienceBullets.pwc.map((bullet, i) => (
														<li key={i}>{bullet}</li>
													))}
												</ul>
											</div>

											<div>
												<div className="flex justify-between items-start mb-2">
													<div>
														<h4 className="text-xl font-semibold text-white">Software Engineer Intern</h4>
														<p className="text-lg text-red-300">EduTrend (Quanticore LLC) · Remote</p>
													</div>
													<span className="text-lg text-white whitespace-nowrap ml-4">Aug 2025 – Dec 2025</span>
												</div>
												<ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
													<li>Designed GraphQL schemas, resolvers, and MongoDB service layers for admin management in a TypeScript mobile backend.</li>
													<li>Built secure authentication and role-based access control using Clerk, supporting OAuth-based login flows for mobile clients.</li>
													<li>Diagnosed and resolved GitHub Actions CI/CD pipeline failures by fixing cross-platform ESLint and Linux build issues, restoring automated testing and deployment.</li>
												</ul>
											</div>

											<div>
												<div className="flex justify-between items-start mb-2">
													<div>
														<h4 className="text-xl font-semibold text-white">Undergraduate Teaching Assistant (CS 110)</h4>
														<p className="text-lg text-red-300">University of Arizona, Dept. of Computer Science</p>
													</div>
													<span className="text-lg text-white whitespace-nowrap ml-4">Jan 2024 – May 2026</span>
												</div>
												<ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
													<li>Built Python automation scripts for grading and testing, reducing manual evaluation time by 10+ hours per week.</li>
													<li>Taught core programming, data structures, and algorithms to 150+ students per semester, debugging Python and Java code in labs and office hours.</li>
												</ul>
											</div>
										</div>
									</section>

									{/* Projects */}
									<section className="mb-8">
										<h3 className="text-3xl font-bold text-red-400 mb-4">Key Projects</h3>
										<div className="space-y-4">
											{config.projects.map((project) => (
												<div key={project.title}>
													<div className="flex items-baseline gap-3 mb-1">
														<h4 className="text-xl font-semibold text-white">{project.title}</h4>
														<span className="text-sm text-red-300">{project.link}</span>
													</div>
													<ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
														{project.bullets.map((bullet, i) => (
															<li key={i}>{bullet}</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</section>

									{/* Certifications */}
									<section>
										<h3 className="text-3xl font-bold text-red-400 mb-4">Certifications</h3>
										<ul className="list-disc list-inside text-white text-lg space-y-1 ml-4">
											<li>IBM Generative AI Engineering – IBM / Coursera (2025)</li>
											<li>AWS Fundamentals – Amazon Web Services / Coursera (2025)</li>
										</ul>
									</section>
								</div>
							</Card>
						</motion.div>
					</AnimatePresence>
				</div>
			</section>
		</div>
	);
}