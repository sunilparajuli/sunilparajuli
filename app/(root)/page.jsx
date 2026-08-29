"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="text-[10px] uppercase tracking-[4px] text-gray-500 font-medium font-mono">
						Scroll
					</span>
					<motion.div
						className="w-[1.5px] h-14 bg-gray-500 origin-top"
						animate={{
							scaleY: [0, 1, 1],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const MyPage = () => {
	return (
		<FullPageWrapper>
			{/* Section 1: Hero */}
			<Section>
				<div className="mx-auto w-[85%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10 overflow-hidden items-center">
					<motion.div
						className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "spring" }}>
						
						<motion.h3
							className="uppercase text-sm md:text-base mb-3 font-mono font-semibold tracking-[.4rem] text-emerald-600 dark:text-emerald-400"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							Sunil Parajuli
						</motion.h3>

						<motion.h1
							className="text-black text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-4 tracking-tight leading-[1.05]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.3, type: "spring" }}>
							Solution Architect & Digital Health Specialist
						</motion.h1>

						<motion.p
							className="title text-base md:text-lg 2xl:text-xl mt-3 tracking-wide text-gray-600 leading-relaxed max-w-3xl"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.4, type: "spring" }}>
							Specializing in national-scale health insurance platforms (<span className="font-semibold text-black">openIMIS</span>), <span className="font-semibold text-black">HL7 FHIR</span> interoperability pipelines, and AI/OCR-driven claims verification systems across Nepal, Germany, Kenya, Laos, and Cameroon.
						</motion.p>

						<motion.div
							className="buttons flex flex-wrap gap-4 justify-center md:justify-start items-center mt-8"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.5, type: "spring" }}>
							<Button variation="primary">
								<a
									href="/Sunil_Parajuli_CV.pdf"
									target="_blank"
									rel="noopener noreferrer"
									download="Sunil_Parajuli_CV.pdf"
									className="flex items-center gap-2">
									<FontAwesomeIcon icon={faFilePdf} className="w-3.5 h-3.5" />
									Download CV
								</a>
							</Button>
							<Button variation="secondary">
								<Link href="/about">Learn More</Link>
							</Button>
						</motion.div>
					</motion.div>

					{/* Right Hero Visual Card */}
					<motion.div
						className="hidden md:flex col-span-1 mx-auto justify-center items-center w-full"
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6, type: "spring" }}>
						<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-2xl shadow-2xl border border-neutral-700 w-full max-w-sm space-y-6">
							<div className="flex items-center justify-between border-b border-neutral-700 pb-4">
								<span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
									Key Indicators
								</span>
								<span className="text-xs font-mono text-neutral-400">Kathmandu, NP</span>
							</div>
							
							<div className="grid grid-cols-2 gap-4 text-center font-mono">
								<div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800">
									<span className="text-2xl font-bold text-white block">9+</span>
									<span className="text-[10px] uppercase text-neutral-400">Years Exp</span>
								</div>
								<div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800">
									<span className="text-2xl font-bold text-emerald-400 block">10M+</span>
									<span className="text-[10px] uppercase text-neutral-400">Lives Impacted</span>
								</div>
								<div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800">
									<span className="text-2xl font-bold text-white block">3.76</span>
									<span className="text-[10px] uppercase text-neutral-400">M.S. GPA</span>
								</div>
								<div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800">
									<span className="text-2xl font-bold text-cyan-400 block">6+</span>
									<span className="text-[10px] uppercase text-neutral-400">Nations</span>
								</div>
							</div>

							<div className="border-t border-neutral-700 pt-4 space-y-2 text-xs font-mono text-neutral-300">
								<div className="flex justify-between">
									<span className="text-neutral-400">Specialization:</span>
									<span className="text-emerald-400 font-bold">openIMIS / FHIR</span>
								</div>
								<div className="flex justify-between">
									<span className="text-neutral-400">Academic:</span>
									<span className="text-white">M.S. in e-Governance</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</Section>

			{/* Section 2: About Me */}
			<Section>
				<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0 md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 shadow-2xl"
							initial={{ x: 300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}>
							<Image
								src={ProjectAll}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="Sunil Parajuli - Systems Architecture"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[55%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							About Me
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-lg md:text-xl mt-4 tracking-wider text-gray-700 leading-relaxed mb-5 max-w-xl"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							For over a decade, I&apos;ve worked at the intersection of software, public health policy, and e-Governance infrastructure, engineering solutions that connect hospitals, registries, and financing institutions.
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, type: "spring" }}>
							<Button variation="primary">
								<Link href="/about">Explore Career & Pedigree</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* Section 3: Projects */}
			<Section>
				<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0 md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 shadow-2xl"
							initial={{ x: 300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}>
							<Image
								src={ProjectAll}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="Sunil Parajuli - Selected Projects"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[55%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							Selected Work
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-lg md:text-xl mt-4 tracking-wider text-gray-700 leading-relaxed mb-5 max-w-xl"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							National health insurance architectures, openCRVS & openIMIS interoperability pipelines, and AI document verification models built for GIZ, ILO, and ministries of health.
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, type: "spring" }}>
							<Button variation="primary">
								<Link href="/projects">View All Projects</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* Section 4: Get In Touch */}
			<Section>
				<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[30%] md:top-1/4 col-span-2 flex flex-col justify-center items-start text-start px-10 overflow-hidden">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 text-black text-5xl md:text-8xl font-bold mb-3"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							Get In Touch
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-lg md:text-xl mt-4 tracking-wider text-gray-600 leading-relaxed max-w-2xl"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							Available for technical advisory, health informatics systems design, international speaking, or architecture consulting.
						</motion.p>
						
						<motion.div
							className="my-6 space-y-2 font-mono text-base md:text-lg"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.3, type: "spring" }}>
							<div className="flex items-center gap-3">
								<span className="text-gray-400 text-sm uppercase">Email:</span>
								<a href="mailto:sunilparajuli2002@gmail.com" className="font-semibold text-black hover:text-emerald-600 underline">
									sunilparajuli2002@gmail.com
								</a>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-gray-400 text-sm uppercase">Phone:</span>
								<a href="tel:+9779849298499" className="font-semibold text-black hover:text-emerald-600">
									(+977) 9849298499
								</a>
							</div>
						</motion.div>

						{/* Social Icons */}
						<div className="flex items-center space-x-4 mt-2">
							<motion.a
								href="mailto:sunilparajuli2002@gmail.com"
								aria-label="Send email"
								className="flex justify-center items-center bg-gray-900 w-12 h-12 rounded-full text-white hover:bg-emerald-600 transition-all duration-300 shadow-md"
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.1 }}>
								<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
							</motion.a>

							<motion.a
								href="https://github.com/sunilparajuli"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="flex justify-center items-center bg-gray-900 w-12 h-12 rounded-full text-white hover:bg-emerald-600 transition-all duration-300 shadow-md"
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}>
								<FontAwesomeIcon icon={faGithub} className="text-xl" />
							</motion.a>

							<motion.a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="flex justify-center items-center bg-gray-900 w-12 h-12 rounded-full text-white hover:bg-emerald-600 transition-all duration-300 shadow-md"
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}>
								<FontAwesomeIcon icon={faLinkedin} className="text-xl" />
							</motion.a>

							<motion.a
								href="tel:+9779849298499"
								aria-label="Phone"
								className="flex justify-center items-center bg-gray-900 w-12 h-12 rounded-full text-white hover:bg-emerald-600 transition-all duration-300 shadow-md"
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}>
								<FontAwesomeIcon icon={faPhone} className="text-lg" />
							</motion.a>
						</div>
					</div>
				</div>
			</Section>

			<ScrollIndicator />
		</FullPageWrapper>
	);
};

export default MyPage;
