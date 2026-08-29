"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className="flex justify-center items-center flex-col mt-10 overflow-hidden bg-neutral-950 text-white">
			<div className="flex justify-center items-center flex-col mt-10 self-center py-16 px-6 border-b border-neutral-800 w-full max-w-6xl">
				<Link href="/#contact" className="group text-center">
					<motion.h2
						className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-emerald-400 font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}>
						Digital Health & Architecture Advisory
					</motion.h2>
					<motion.h1
						className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						Let&apos;s Build Systems That Matter.{" "}
						<FontAwesomeIcon
							icon={faArrowAltCircleRight}
							className="inline text-3xl sm:text-5xl ml-2 text-emerald-400 group-hover:translate-x-2 transition-transform"
						/>
					</motion.h1>
				</Link>

				<div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm font-mono text-neutral-400">
					<a href="mailto:sunilparajuli2002@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
						<FontAwesomeIcon icon={faEnvelope} />
						<span>sunilparajuli2002@gmail.com</span>
					</a>
					<span className="hidden sm:inline">·</span>
					<a href="tel:+9779849298499" className="flex items-center gap-2 hover:text-white transition-colors">
						<FontAwesomeIcon icon={faPhone} />
						<span>(+977) 9849298499</span>
					</a>
					<span className="hidden sm:inline">·</span>
					<div className="flex items-center gap-4">
						<a href="https://github.com/sunilparajuli" target="_blank" rel="noopener noreferrer" className="hover:text-white">
							<FontAwesomeIcon icon={faGithub} className="text-base" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
							<FontAwesomeIcon icon={faLinkedin} className="text-base" />
						</a>
					</div>
				</div>
			</div>

			<footer className="flex justify-between items-center py-6 px-8 w-full max-w-6xl text-xs font-mono text-neutral-500">
				<p>
					&copy; {new Date().getFullYear()} <span className="text-neutral-300 font-bold">Sunil Parajuli</span>. All rights reserved.
				</p>
				<p className="text-right">
					Kathmandu, Nepal · Solution Architect
				</p>
			</footer>
		</div>
	);
}
