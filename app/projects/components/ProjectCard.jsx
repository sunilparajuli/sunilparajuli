import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ProjectCard({ project, index, activeCategory }) {
	return (
		<>
			{project.category.includes(parseInt(activeCategory)) && (
				<Link href={"/projects/" + project.slug} key={index} className="block w-full">
					<motion.div
						className="relative flex justify-center items-center flex-col w-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden p-8 aspect-video border border-neutral-700 shadow-lg group hover:border-emerald-500 transition-all duration-300"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}>
						
						<div className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-mono font-bold px-3 py-1 rounded-md z-20">
							{project.year}
						</div>

						<div className="text-center z-10 space-y-3 p-4">
							<h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
								{project.title}
							</h3>
							
							<p className="text-xs md:text-sm text-neutral-300 line-clamp-2 max-w-md mx-auto">
								{project.desc[0]}
							</p>

							<div className="flex justify-center items-center flex-wrap gap-1.5 pt-2">
								{project.tech.slice(0, 4).map((t, idx) => (
									<span
										key={idx}
										className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-mono rounded-md">
										{t}
									</span>
								))}
								{project.tech.length > 4 && (
									<span className="px-2 py-1 text-neutral-400 text-[10px] font-mono">
										+{project.tech.length - 4} more
									</span>
								)}
							</div>
						</div>
					</motion.div>
				</Link>
			)}
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
