"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes, faPaperPlane, faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
	const [isOpen, setIsOpen] = useState(false);
	const [status, setStatus] = useState("idle"); // idle, submitting, success, error
	const [errorMessage, setErrorMessage] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		honeypot: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			if (!res.ok || !data.success) {
				throw new Error(data.error || "Failed to dispatch message.");
			}

			setStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
		} catch (err) {
			setStatus("error");
			setErrorMessage(err.message || "Something went wrong.");
		}
	};

	return (
		<>
			{/* Floating Trigger Button */}
			<div className="fixed bottom-6 right-6 z-40">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setIsOpen(!isOpen)}
					className="bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-2 border-white/20"
					aria-label="Contact Sunil Parajuli">
					<FontAwesomeIcon icon={isOpen ? faTimes : faEnvelope} className="text-xl" />
				</motion.button>
			</div>

			{/* Contact Modal / Drawer */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 30, scale: 0.95 }}
						transition={{ duration: 0.25 }}
						className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md bg-neutral-900/95 backdrop-blur-xl border border-neutral-700 rounded-2xl shadow-2xl p-6 text-white font-sans">
						
						<div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-3">
							<div>
								<h3 className="font-bold text-lg text-white">Direct Message</h3>
								<p className="text-xs text-neutral-400 font-mono">Routes to sunilparajuli2002@gmail.com</p>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="text-neutral-400 hover:text-white p-1"
								aria-label="Close form">
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</div>

						{status === "success" ? (
							<div className="text-center py-8 space-y-3 font-mono">
								<div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto text-xl">
									<FontAwesomeIcon icon={faCheck} />
								</div>
								<h4 className="text-base font-bold text-white">Message Dispatched!</h4>
								<p className="text-xs text-neutral-300">
									Thank you. Sunil Parajuli will review your message and reply promptly.
								</p>
								<button
									onClick={() => setStatus("idle")}
									className="text-xs text-emerald-400 underline hover:text-emerald-300 mt-2 block mx-auto">
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
								<input
									type="text"
									name="honeypot"
									value={formData.honeypot}
									onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
									style={{ display: "none" }}
									tabIndex={-1}
									autoComplete="off"
								/>

								{status === "error" && (
									<div className="p-3 bg-red-900/40 border border-red-500 rounded-lg text-red-200 text-xs">
										{errorMessage}
									</div>
								)}

								<div>
									<label className="block text-neutral-400 uppercase text-[10px] mb-1">Your Name *</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										placeholder="e.g. Dr. Jennifer Vance"
										className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
									/>
								</div>

								<div>
									<label className="block text-neutral-400 uppercase text-[10px] mb-1">Your Email *</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										placeholder="jennifer@organization.org"
										className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
									/>
								</div>

								<div>
									<label className="block text-neutral-400 uppercase text-[10px] mb-1">Subject</label>
									<input
										type="text"
										value={formData.subject}
										onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
										placeholder="openIMIS Advisory / Collaboration"
										className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
									/>
								</div>

								<div>
									<label className="block text-neutral-400 uppercase text-[10px] mb-1">Message *</label>
									<textarea
										required
										rows={3}
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
										placeholder="Briefly describe your initiative or inquiry..."
										className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none resize-none"
									/>
								</div>

								<button
									type="submit"
									disabled={status === "submitting"}
									className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2">
									{status === "submitting" ? (
										<>
											<FontAwesomeIcon icon={faSpinner} className="animate-spin" />
											<span>Dispatching...</span>
										</>
									) : (
										<>
											<span>Send Inquiry</span>
											<FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
										</>
									)}
								</button>
							</form>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
