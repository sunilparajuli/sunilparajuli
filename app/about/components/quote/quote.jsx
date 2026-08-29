import "./style.css";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";

function Wrapper({ children }) {
	return (
		<div className="min-h-[60vh] mx-auto container p-10 grid grid-cols-1 mt-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5"
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Quote() {
	const text1 = '"Technology for systems that serve people.'.split(" ");
	const text2 = 'Bridging national policy mandates and digital health infrastructure."'.split(" ");
	const [ref, isIntersecting] = useIntersectionObserver();

	return (
		<Wrapper>
			<div ref={ref} className="text-center max-w-3xl">
				<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white mb-3">
					{text1.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, filter: "blur(4px)", scale: 0.92 }}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting ? "blur(0px)" : "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{ delay: isIntersecting ? index * 0.08 : 0, duration: 0.4 }}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
				<h3 className="text-lg md:text-xl font-medium text-emerald-600 dark:text-emerald-400">
					{text2.map((word, index) => (
						<motion.span
							key={index + text1.length}
							initial={{ opacity: 0, filter: "blur(4px)", scale: 0.92 }}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting ? "blur(0px)" : "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{ delay: isIntersecting ? (text1.length + index) * 0.08 : 0, duration: 0.4 }}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
				<p className="mt-6 text-xs font-mono uppercase tracking-widest text-gray-500">
					— Sunil Parajuli · Solution Architect
				</p>
			</div>
		</Wrapper>
	);
}
