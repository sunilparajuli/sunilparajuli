"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "2016",
		endDate: "2017",
		company: "Seva Development Ltd.",
		position: "Associate Software Engineer",
		type: "Full-time",
		location: "Lamjung, Nepal",
		description:
			"Conducted manual and automated testing to ensure software met client quality and compliance standards. Developed user documentation, facilitated end-user training, and assisted in production deployment and release verification.",
		skills: ["Software Testing", "QA", "Agile / Scrum", "Jira", "User Enablement"],
	},
	{
		id: 2,
		startDate: "2018",
		endDate: "2019",
		company: "Nepstralia Group",
		position: "Lead Software Developer",
		type: "Remote (Australia)",
		location: "Sydney, Australia",
		description:
			"Architected a classified platform for students to find jobs and accommodation. Designed REST APIs, integrated third-party payment and verification services, and implemented Google Analytics and SEO strategies.",
		skills: ["PHP", "Laravel", "REST APIs", "SEO", "Google Analytics", "MySQL"],
	},
	{
		id: 3,
		startDate: "2019",
		endDate: "2020",
		company: "Fixtrox Pte. Ltd.",
		position: "Software Support & Developer",
		type: "Remote (Singapore)",
		location: "Singapore",
		description:
			"Engineered and maintained web applications using WordPress and PHP with jQuery. Managed AWS EC2 instances, Apache web server configurations, and hosting deployments.",
		skills: ["WordPress", "PHP", "jQuery", "Apache", "AWS EC2", "cPanel"],
	},
	{
		id: 4,
		startDate: "2019",
		endDate: "2020",
		company: "Grantha",
		position: "Team Lead & Senior Developer (Sarovara)",
		type: "Full-time",
		location: "Kathmandu, Nepal",
		description:
			"Led development of the Sarovara e-commerce ecosystem for water logistics with geofenced product ordering and delivery. Engineered backend using Django and cross-platform mobile apps with Flutter (iOS/Android).",
		skills: ["Python", "Django", "Flutter", "PostgreSQL", "Google Maps API", "Redis"],
	},
	{
		id: 5,
		startDate: "2017",
		endDate: "2025",
		company: "Office of the Attorney General",
		position: "Computer Engineer (Consultant)",
		type: "Consultant",
		location: "Kathmandu, Nepal",
		description:
			"Principal technical advisor for government ICT modernization. Formulated IT policy guidelines, systems design, datacenter administration, and managed high-availability VMware clusters, Linux, and Windows Server infrastructure.",
		skills: ["VMware ESXi", "Linux Server", "Windows Server", "IT Policy", "System Design"],
	},
	{
		id: 6,
		startDate: "2020",
		endDate: "Present",
		company: "Tinker Technology Pvt. Ltd.",
		position: "Team Lead",
		type: "Leadership",
		location: "Kathmandu, Nepal",
		description:
			"Directing implementation and nationwide adoption of openIMIS for the Health Insurance Board (HIB) of Nepal. Coordinated communication with international partners and conducted training sessions to promote digital health utilization.",
		skills: ["openIMIS", "Python", "ReactJS", "PostgreSQL", "Training & Adoption"],
	},
	{
		id: 7,
		startDate: "2023",
		endDate: "Present",
		company: "Social Security Fund (SSF) Nepal",
		position: "Health Insurance & Social Security Expert",
		type: "Consultant",
		location: "Kathmandu, Nepal",
		description:
			"Architected core SSF enterprise modules covering contributor registration, payments, grievances, medical claims, investments, and loans. Built duplicate claims detection rules and supported HL7 FHIR integration with hospital EHRs.",
		skills: ["Django", "VB.NET", "IIS", "ReactJS", "HL7 FHIR", "PostgreSQL"],
	},
	{
		id: 8,
		startDate: "2023",
		endDate: "Present",
		company: "International Labour Organization (ILO)",
		position: "Social Security Protection Expert",
		type: "Consultant",
		location: "Kathmandu, Nepal",
		description:
			"Customizing openIMIS to facilitate formal sector social security schemes (Medical/Non-Medical Claims, Formal Registration, Sick Leave, Maternity Care, Unemployment Benefits). Supported FHIR EHR data exchange.",
		skills: ["openIMIS", "HL7 FHIR", "Django", "ReactJS", "Social Protection Schemes"],
	},
	{
		id: 9,
		startDate: "2024",
		endDate: "Present",
		company: "GIZ Germany",
		position: "Project Expert (Sandbox & Knowledge Creation)",
		type: "Consultant",
		location: "Kathmandu, Nepal",
		description:
			"Global expert managing openIMIS Sandbox testing, QA, and interoperability across Digital Public Goods (openCRVS, MOSIP, openG2P, openSPP, DHIS2). Authored knowledge materials and represented openIMIS at international developer meets.",
		skills: ["openIMIS", "openCRVS", "MOSIP", "openG2P", "openHIE", "DCI Standards"],
	},
	{
		id: 10,
		startDate: "11/2025",
		endDate: "Present",
		company: "Tinker Technology / GIZ",
		position: "Solution Architect",
		type: "Leadership",
		location: "Kathmandu, Nepal",
		description:
			"Spearheading the architectural overhaul of national openIMIS installations to modern modular microservices architecture, ensuring high availability, backward compatibility, and clean standardized APIs.",
		skills: ["Solution Architecture", "Django", "ReactJS", "Docker", "Microservices", "PostgreSQL"],
	},
];

experiences.reverse();

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.7, type: "spring" }}>
					Professional Career Timeline
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${
				isEven ? "md:justify-center md:translate-x-68" : "md:justify-center md:-translate-x-68"
			} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-black to-gray-800 text-white px-10 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
				<div className="flex items-center justify-center gap-6 font-mono text-xs">
					<div className="text-center">
						<div className="text-sm font-bold text-white">{experience.startDate}</div>
						<div className="text-[10px] text-gray-400">Start</div>
					</div>
					<div className="w-px h-8 bg-gray-600"></div>
					<div className="text-center">
						<div className="text-sm font-bold text-emerald-400">{experience.endDate}</div>
						<div className="text-[10px] text-gray-400">End</div>
					</div>
					<div className="w-px h-8 bg-gray-600"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-300">{experience.location}</div>
						<div className="text-[10px] text-gray-400">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${
				isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
			} md:w-1/2`}>
			<div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-gray-300 dark:border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0">
				<div className="mb-4">
					<h3 className="font-bold text-xl text-black dark:text-white mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-emerald-600 dark:text-emerald-400">
						{experience.position}
						<span className="text-xs font-mono text-gray-500 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				<p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
					{experience.description}
				</p>

				<div className="flex flex-wrap gap-1.5">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/80 dark:bg-neutral-800 text-black dark:text-gray-200 px-3 py-1 rounded-full text-xs font-mono font-medium">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

	return (
		<>
			<Title />
			<Wrapper>
				<div className="relative w-full max-w-6xl mx-auto">
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
									<div
										className="absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30 md:left-1/2 md:-translate-x-1/2 md:top-4 left-0 -translate-x-1/2 top-5"
									/>
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>

					{experiences.length > 4 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
								{showAll ? "Show Less" : `View Full History (${experiences.length} Positions)`}
							</button>
						</motion.div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
