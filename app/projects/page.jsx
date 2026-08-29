"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Digital Health & openIMIS",
	2: "FHIR & Interoperability",
	3: "Social Protection & AI",
	4: "Enterprise Systems",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				
				{/* Top Hero */}
				<div className="relative h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 shadow-2xl">
							<Image
								src={ProjectAll}
								alt="Sunil Parajuli Projects"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 30vw"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[55%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100/50 md:bg-transparent">
						<h1 className="text-black text-5xl md:text-8xl font-bold tracking-tight">
							Systems & Projects
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 max-w-xl">
							Selected national-scale health insurance platforms, interoperability pipelines, and AI verification engines.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Explore Showcase</Button>
						</motion.div>
					</div>
				</div>

				{/* Highlight Section */}
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3 text-black">Project Highlight</h1>
					</div>
				</div>

				<div className="relative w-screen mx-auto container gap-8 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-16 items-center">
					<div className="relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700">
						<Image
							src={ProjectAll}
							alt="Berlin Hackathon 2026"
							fill
							className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
						/>
					</div>

					<motion.div
						className="flex justify-center items-start flex-col md:px-6"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, type: "spring" }}>
						<span className="font-mono text-xs uppercase text-emerald-600 font-bold tracking-wider mb-2">
							GIZ Germany · SAP Data Space Berlin (2026)
						</span>
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-black">
							OCR Document Verification for Social Protection
						</h2>
						<p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
							Engineered an AI/OCR automated document verification engine that validates applicant supporting documentation against declarations in real-time, reducing manual adjudication overhead by 75% for social protection registries.
						</p>
						<div className="flex gap-4">
							<Button variation="primary">
								<Link href="/projects/berlin-hackathon-2026" className="flex items-center gap-2">
									<span>Case Study</span>
									<FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
								</Link>
							</Button>
							<Button variation="secondary">
								<a
									href="https://openimis.atlassian.net/wiki/spaces/OP/pages/4879515650/openIMIS+Hackathon+2026+-+Berlin+Germany"
									target="_blank"
									rel="noopener noreferrer">
									Official Event ↗
								</a>
							</Button>
						</div>
					</motion.div>
				</div>

				{/* Note Worthy Projects Section */}
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3 text-black"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, type: "spring" }}>
							Technical Architectures by Category
						</motion.h1>
					</div>
				</div>

				{/* Category Filters */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ type: "spring" }}
					className="flex flex-row justify-center items-center flex-wrap gap-2 md:gap-4 my-8 px-4">
					{Object.keys(category).map((key) => (
						<button
							key={key}
							className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 font-semibold ${
								activeCategory === parseInt(key)
									? "bg-black text-white shadow-lg scale-105"
									: "bg-gray-200 text-gray-700 hover:bg-gray-300"
							}`}
							onClick={() => setActiveCategory(parseInt(key))}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<div className="w-screen mx-auto container gap-6 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-16">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* Archive Button */}
				<div className="flex justify-center items-center flex-col my-10">
					<Button variation="primary">
						<Link href="/projects/archive">View Full Project Archive (Table)</Link>
					</Button>
				</div>
			</main>
		</>
	);
}
