"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";

const skillCategories = {
	health: {
		title: "Health Informatics & DPGs",
		icon: ActivityIcon,
		description: "National-scale digital health, openIMIS, and interoperability ecosystems",
		languages: [
			{ name: "openIMIS Architecture", highlight: true },
			{ name: "HL7 FHIR Interoperability", highlight: true },
			{ name: "Digital Public Goods (DPGs)", highlight: true },
			{ name: "Digital Convergence Initiative (DCI)", highlight: true },
			{ name: "openCRVS Integration", highlight: true },
			{ name: "openHIM Middleware", highlight: true },
			{ name: "openHIE Framework", highlight: false },
			{ name: "MOSIP & openG2P", highlight: false },
			{ name: "Claims Adjudication Rules", highlight: true },
			{ name: "Social Protection Workflows", highlight: false },
		],
		tools: [
			"openIMIS Sandbox",
			"DPG Standards",
			"openHIM Console",
			"FHIR Validator",
			"Health Insurance Board Stack",
			"SSF Portal",
			"GIZ Technical Toolkits",
			"AeHIN Guidelines",
		],
	},
	architecture: {
		title: "Backend & Systems Architecture",
		icon: WebhookIcon,
		description: "Robust microservices, high-throughput APIs, and database engineering",
		languages: [
			{ name: "Python", highlight: true },
			{ name: "Django & DRF", highlight: true },
			{ name: "FastAPI", highlight: true },
			{ name: "PostgreSQL", highlight: true },
			{ name: "Microservices Architecture", highlight: true },
			{ name: "REST & GraphQL APIs", highlight: true },
			{ name: "Redis", highlight: false },
			{ name: "SQL & Query Optimization", highlight: false },
			{ name: "VB.NET", highlight: false },
			{ name: "PHP & Laravel", highlight: false },
		],
		tools: [
			"Docker & Compose",
			"Linux (Ubuntu/Debian)",
			"VMware ESXi Clusters",
			"Nginx & Apache",
			"Git & GitHub",
			"Postman & Swagger",
			"CI/CD Pipelines",
			"Server Hardening",
		],
	},
	frontend: {
		title: "Frontend & Web Apps",
		icon: CodepenIcon,
		description: "Modern administrative consoles, dashboards, and enterprise portals",
		languages: [
			{ name: "ReactJS", highlight: true },
			{ name: "Next.js", highlight: true },
			{ name: "TypeScript", highlight: true },
			{ name: "JavaScript (ES6+)", highlight: false },
			{ name: "Tailwind CSS", highlight: true },
			{ name: "HTML5 & Semantic Web", highlight: false },
			{ name: "CSS3 & Modern Layouts", highlight: false },
			{ name: "Flutter", highlight: false },
		],
		tools: [
			"Vercel",
			"Vite",
			"Framer Motion",
			"Lucide / FontAwesome",
			"Responsive UI/UX",
			"Webpack / Turbopack",
		],
	},
	ai_ml: {
		title: "AI, ML & Document OCR",
		icon: MobileIcon,
		description: "Intelligent fraud detection, OCR verification, and predictive modeling",
		languages: [
			{ name: "Machine Learning (Scikit-Learn)", highlight: true },
			{ name: "OCR & Document AI", highlight: true },
			{ name: "False Claims Detection", highlight: true },
			{ name: "Random Forest & XGBoost", highlight: true },
			{ name: "Isolation Forests (Anomalies)", highlight: false },
			{ name: "Pandas & NumPy", highlight: false },
			{ name: "Feature Engineering", highlight: false },
		],
		tools: [
			"Jupyter Notebook",
			"Google Colab",
			"Model Deployment",
			"Dataset Preprocessing",
			"Classification Metrics",
			"SAP Data Space Hackathon Stack",
		],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	const Icon = skill.icon;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
					? "bg-white/40 dark:bg-neutral-800 border-black dark:border-white border-2 shadow-lg scale-102"
					: "bg-white/10 dark:bg-neutral-900/40 border-gray-300 dark:border-neutral-700 hover:bg-white/20 hover:border-gray-400"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}>
			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected ? "bg-white/50 dark:bg-neutral-700" : "bg-white/20 dark:bg-neutral-800 group-hover:bg-white/30"
					}`}>
					<Icon className="w-8 h-8 text-black dark:text-white" />
				</div>
				<div>
					<h3 className="font-bold text-black dark:text-white text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

const tagVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12 space-y-8">
			{/* Languages & Frameworks Section */}
			<motion.div
				className="bg-white/40 dark:bg-neutral-900/40 border border-gray-300 dark:border-neutral-700 rounded-2xl p-8 shadow-sm backdrop-blur-md"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}>
				<h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
					Core Competencies & Frameworks
				</h3>
				<motion.div
					key={selectedSkill.title}
					className="flex flex-wrap justify-center gap-3"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
					initial="hidden"
					animate="show">
					{selectedSkill.languages.map((skill) => (
						<motion.span
							key={skill.name}
							variants={tagVariants}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2 ${
								skill.highlight
									? "bg-black text-white dark:bg-white dark:text-black shadow-md border-black dark:border-white scale-105 z-10 hover:shadow-lg"
									: "bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 text-black dark:text-gray-200 hover:bg-white"
							}`}>
							{skill.highlight && (
								<span className="text-emerald-400 dark:text-emerald-600 text-[10px] animate-pulse">✦</span>
							)}
							{skill.name}
						</motion.span>
					))}
				</motion.div>
			</motion.div>

			{/* Tools Section */}
			<motion.div
				className="bg-white/20 dark:bg-neutral-900/20 border border-gray-300/40 dark:border-neutral-800 rounded-2xl p-8 backdrop-blur-md"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}>
				<h3 className="text-sm font-mono font-bold text-gray-500 mb-6 text-center uppercase tracking-widest">
					Infrastructure, Ecosystems & Tooling
				</h3>
				<motion.div
					key={selectedSkill.title + "-tools"}
					className="flex flex-wrap justify-center gap-3"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
					initial="hidden"
					animate="show">
					{selectedSkill.tools.map((tool) => (
						<motion.span
							key={tool}
							variants={tagVariants}
							className="px-4 py-1.5 bg-gray-200/50 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-mono font-medium">
							{tool}
						</motion.span>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("health");
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
						Technical Architecture & Capabilities
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
						Domains of expertise spanning international digital health public goods, microservice engineering, and machine learning.
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}
