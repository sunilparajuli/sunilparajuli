"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.3,
			type: "tween",
			duration: 0.3,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		x: -80,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};

	return (
		<motion.div
			className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}>
			<div className="relative opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-neutral-900 min-w-[100vw] ">
				<div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50 font-mono">
					<motion.h1
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest text-emerald-400">
						Navigation
					</motion.h1>
					<Link href="/">
						<div
							className="text-2xl font-semibold text-white hover:text-emerald-400 transition-colors"
							onClick={handleItemClick}>
							<motion.h2
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.1}>
								Home
							</motion.h2>
						</div>
					</Link>
					<Link href="/about">
						<div
							onClick={handleItemClick}
							className="text-2xl font-semibold text-white hover:text-emerald-400 transition-colors">
							<motion.h2
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.2}>
								About & Career
							</motion.h2>
						</div>
					</Link>
					<Link href="/projects">
						<div
							onClick={handleItemClick}
							className="text-2xl font-semibold text-white hover:text-emerald-400 transition-colors">
							<motion.h2
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.3}>
								Projects & Showcase
							</motion.h2>
						</div>
					</Link>
					<Link href="/projects/archive">
						<div
							onClick={handleItemClick}
							className="text-2xl font-semibold text-white hover:text-emerald-400 transition-colors">
							<motion.h2
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.4}>
								Project Archive
							</motion.h2>
						</div>
					</Link>
					<a
						href="/Sunil_Parajuli_CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						download="Sunil_Parajuli_CV.pdf"
						onClick={handleItemClick}
						className="text-lg font-semibold text-emerald-400 border border-emerald-400 px-6 py-2 rounded-full hover:bg-emerald-400 hover:text-black transition-all">
						Download CV (PDF)
					</a>
				</div>
			</div>
		</motion.div>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-20 w-screen fixed transition-colors duration-300 ${
					isNavOpen
						? "backdrop-blur-md bg-neutral-950/80"
						: "backdrop-blur-md bg-white/70 dark:bg-neutral-950/70"
				} inset-0 flex flex-row justify-between items-center h-16 z-50 border-b border-neutral-200 dark:border-neutral-800`}>
				<div>
					<Link href="/">
						<h1
							className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
								isNavOpen ? "text-white" : "text-neutral-900 dark:text-white"
							}`}>
							<span className="text-emerald-600 dark:text-emerald-400 font-mono">SP.</span> Sunil Parajuli
						</h1>
					</Link>
				</div>
				<div className="flex flex-row items-center gap-6">
					<div className="hidden md:flex items-center gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
						<Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
						<Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
						<Link href="/projects" className="hover:text-emerald-600 transition-colors">Projects</Link>
						<a
							href="/Sunil_Parajuli_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							download="Sunil_Parajuli_CV.pdf"
							className="px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-md hover:bg-emerald-600 hover:text-white transition-colors">
							CV ↗
						</a>
					</div>
					<button
						aria-label={isNavOpen ? "Close menu" : "Open menu"}
						className="burger button flex flex-col justify-center items-center space-y-1.5 cursor-pointer"
						onClick={toggleNav}>
						<div
							className={`w-7 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 ${
								isNavOpen ? "rotate-45 bg-white translate-y-[4px]" : ""
							}`}></div>
						<div
							className={`w-7 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 ${
								isNavOpen ? "-rotate-45 -translate-y-[4px] bg-white" : ""
							}`}></div>
					</button>
				</div>
			</nav>
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default Navbar;
