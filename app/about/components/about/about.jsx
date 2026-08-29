import Image from "next/image";
import { motion } from "framer-motion";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3 text-black dark:text-white">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-8 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center">
				<div className="flex justify-center items-start flex-col mb-5">
					<div className="relative w-full aspect-video md:aspect-square bg-slate-200 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-neutral-700 grayscale hover:grayscale-0 transition-all duration-300">
						<Image
							src={ProjectAll}
							alt="Sunil Parajuli - Solution Architect"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</div>
				
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-6"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, type: "spring" }}>
					
					<h2 className="text-3xl font-bold tracking-tight mb-4 text-black dark:text-white">
						Sunil Parajuli
					</h2>

					<p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
						I am a <span className="font-bold text-black dark:text-white">Solution Architect and Health Informatics Specialist</span> dedicated to engineering mission-critical national health protection systems, Digital Public Goods (DPGs), and interoperability backbones.
						<br /><br />
						Holding a <span className="font-semibold text-black dark:text-white">Master in e-Governance (GPA: 3.76/4.0)</span> and a <span className="font-semibold text-black dark:text-white">Bachelor of Computer Engineering from Kathmandu University</span>, my career bridges the gap between public health financing policy and resilient distributed software architecture.
						<br /><br />
						Currently, I lead architecture at <span className="font-semibold text-black dark:text-white">Tinker Technology</span> and consult as a project expert for <span className="font-semibold text-black dark:text-white">GIZ Germany</span> and the <span className="font-semibold text-black dark:text-white">International Labour Organization (ILO)</span>, overseeing national openIMIS microservice migrations, HL7 FHIR hospital EHR integrations, and AI/OCR claims verification pipelines.
					</p>

					<div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
						<span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-full font-bold">
							openIMIS Architect
						</span>
						<span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 rounded-full font-bold">
							HL7 FHIR & DCI Standards
						</span>
						<span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 rounded-full font-bold">
							AI / OCR Claims Verification
						</span>
					</div>
				</motion.div>
			</div>
		</>
	);
}
