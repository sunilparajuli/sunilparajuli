"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faAward,
	faGlobe,
	faBrain,
	faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-6 md:p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const degrees = [
		{
			period: "2023 - Present",
			institution: "Nepal Open University",
			degree: "Master in e-Governance",
			level: "EQF Level 7",
			gpa: "GPA: 3.76 / 4.0",
			thesis: "Machine Learning for False Claim Detection in Health Insurance",
			details: "Research analyzing machine learning classification algorithms (Random Forest, XGBoost, Isolation Forests) to autonomously detect duplicate, inflated, and fraudulent health insurance claim submissions in national health registries.",
		},
		{
			period: "2012 - 2016",
			institution: "Kathmandu University (KU)",
			degree: "Bachelor of Computer Engineering",
			level: "EQF Level 6",
			gpa: "4-Year Professional Degree",
			details: "Rigorous engineering curriculum covering distributed systems, data structures and algorithms, database management systems, network engineering, operating systems, and object-oriented software engineering.",
		},
		{
			period: "2010 - 2012",
			institution: "GoldenGate International College",
			degree: "Higher Secondary (+2 Science - Physical Group)",
			level: "EQF Level 4",
			gpa: "First Division",
			details: "Advanced mathematics, physics, and computer science fundamentals forming the core analytical basis for subsequent computer engineering research.",
		},
	];

	const globalMissions = [
		{
			icon: faBrain,
			title: "Berlin Hackathon: OCR Document Verification",
			subtitle: "GIZ Germany & openIMIS at SAP Data Space, Berlin",
			date: "Feb 2026",
			color: "from-emerald-500 to-teal-600",
		},
		{
			icon: faGlobe,
			title: "GDHF Nairobi: 'From Claim to Care' Global Goods",
			subtitle: "Global Digital Health Forum, Nairobi Kenya",
			date: "Dec 2025",
			color: "from-blue-500 to-indigo-600",
		},
		{
			icon: faAward,
			title: "openCRVS × openIMIS DCI & FHIR Integration",
			subtitle: "GIZ Support to Health Sector Strategy (S2HSS)",
			date: "2024 - 2025",
			color: "from-amber-500 to-orange-600",
		},
		{
			icon: faMedal,
			title: "Lao PDR National Health Insurance Advisory",
			subtitle: "MoH Lao PDR / AeHIN / WHO Technical Collaboration",
			date: "2024",
			color: "from-purple-500 to-pink-600",
		},
		{
			icon: faCertificate,
			title: "openIMIS Developer Community Session Lead",
			subtitle: "GIZ Cameroon & Regional Tech Exchange, Yaoundé",
			date: "2024",
			color: "from-yellow-500 to-amber-600",
		},
	];

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12 w-full">
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white">
						Education & Academic Research
					</h1>
					<p className="text-gray-600 dark:text-gray-400 max-w-[800px] mx-auto text-base">
						Academic pedigree, thesis focus, and global digital health missions.
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					
					{/* Left: Degrees */}
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						
						<h2 className="font-bold text-2xl text-black dark:text-white flex items-center gap-2">
							<FontAwesomeIcon icon={faGraduationCap} className="text-emerald-600 dark:text-emerald-400" />
							Academic Degrees
						</h2>

						<div className="space-y-6">
							{degrees.map((item, idx) => (
								<div
									key={idx}
									className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-gray-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
									<div className="flex items-center justify-between font-mono text-xs text-gray-500 mb-2">
										<span>{item.period}</span>
										<span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
											{item.gpa}
										</span>
									</div>

									<h3 className="font-bold text-xl text-black dark:text-white">{item.degree}</h3>
									<h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
										{item.institution} <span className="text-gray-400">({item.level})</span>
									</h4>

									{item.thesis && (
										<div className="p-3 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mb-3">
											<span className="text-[11px] font-mono uppercase text-amber-700 dark:text-amber-300 font-bold block">
												Master&apos;s Thesis Topic:
											</span>
											<span className="text-xs font-semibold text-black dark:text-white italic">
												&ldquo;{item.thesis}&rdquo;
											</span>
										</div>
									)}

									<p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
										{item.details}
									</p>
								</div>
							))}
						</div>
					</motion.div>

					{/* Right: Global Missions & Honors */}
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						
						<h2 className="font-bold text-2xl text-black dark:text-white flex items-center gap-2">
							<FontAwesomeIcon icon={faGlobe} className="text-blue-600 dark:text-blue-400" />
							Global Missions & Presentations
						</h2>

						<div className="space-y-4">
							{globalMissions.map((mission, index) => (
								<motion.div
									key={index}
									className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-gray-300 dark:border-neutral-700 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
									<div className="flex items-center gap-4">
										<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mission.color} flex items-center justify-center text-white shrink-0 shadow-md`}>
											<FontAwesomeIcon icon={mission.icon} className="h-5 w-5" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between gap-2">
												<h3 className="font-bold text-base text-black dark:text-white truncate">
													{mission.title}
												</h3>
												<span className="text-xs font-mono text-gray-500 shrink-0">
													{mission.date}
												</span>
											</div>
											<p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
												{mission.subtitle}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Language Proficiencies */}
						<div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-gray-300 dark:border-neutral-700 rounded-2xl p-5 shadow-md">
							<h3 className="font-mono text-xs uppercase font-bold text-gray-500 mb-3 tracking-wider">
								Language Competencies
							</h3>
							<div className="grid grid-cols-3 gap-3 text-center font-mono">
								<div className="p-2.5 bg-gray-100 dark:bg-neutral-800 rounded-xl">
									<span className="text-sm font-bold text-black dark:text-white block">English</span>
									<span className="text-[10px] text-emerald-600 font-semibold">C1 Proficient</span>
								</div>
								<div className="p-2.5 bg-gray-100 dark:bg-neutral-800 rounded-xl">
									<span className="text-sm font-bold text-black dark:text-white block">Nepali</span>
									<span className="text-[10px] text-emerald-600 font-semibold">Native / Mother Tongue</span>
								</div>
								<div className="p-2.5 bg-gray-100 dark:bg-neutral-800 rounded-xl">
									<span className="text-sm font-bold text-black dark:text-white block">Hindi</span>
									<span className="text-[10px] text-emerald-600 font-semibold">Fluent Working</span>
								</div>
							</div>
						</div>

					</motion.div>

				</div>
			</section>
		</Wrapper>
	);
}
