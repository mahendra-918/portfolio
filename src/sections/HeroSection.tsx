"use client";

import { motion } from "framer-motion";

function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-lg mx-auto"
        >
            {/* Background glow circles */}
            <circle cx="250" cy="250" r="200" fill="url(#radialBg)" opacity="0.6" />
            <circle cx="250" cy="250" r="140" fill="url(#radialBg2)" opacity="0.4" />

            {/* Desk */}
            <rect x="80" y="340" width="340" height="16" rx="8" fill="url(#deskGrad)" />
            <rect x="120" y="356" width="20" height="60" rx="4" fill="#3730a3" />
            <rect x="360" y="356" width="20" height="60" rx="4" fill="#3730a3" />

            {/* Monitor */}
            <rect x="120" y="160" width="260" height="180" rx="16" fill="#0f0f23" stroke="#7c3aed" strokeWidth="2" />
            <rect x="130" y="170" width="240" height="155" rx="10" fill="#0a0a14" />

            {/* Monitor code lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect key={i} x="145" y={190 + i * 18} width={[120, 180, 90, 150, 60, 140, 100][i]} height="8" rx="4"
                    fill={["#7c3aed", "#06b6d4", "#4ade80", "#f59e0b", "#7c3aed", "#06b6d4", "#4ade80"][i]} opacity="0.8" />
            ))}

            {/* Monitor stand */}
            <rect x="235" y="340" width="30" height="20" rx="4" fill="#1e1e3a" />
            <rect x="215" y="356" width="70" height="8" rx="4" fill="#1e1e3a" />

            {/* Person - body */}
            <ellipse cx="250" cy="330" rx="50" ry="20" fill="url(#bodyGrad)" opacity="0.3" />
            <rect x="220" y="270" width="60" height="70" rx="20" fill="url(#bodyGrad)" />

            {/* Person - head */}
            <circle cx="250" cy="245" r="36" fill="#f5c5a3" />
            {/* Hair */}
            <path d="M218 238 Q218 205 250 205 Q282 205 282 238" fill="#1a0a3a" />
            {/* Eyes */}
            <circle cx="240" cy="244" r="4" fill="#1a0a3a" />
            <circle cx="260" cy="244" r="4" fill="#1a0a3a" />
            <circle cx="241" cy="243" r="1.5" fill="white" />
            <circle cx="261" cy="243" r="1.5" fill="white" />
            {/* Smile */}
            <path d="M242 255 Q250 261 258 255" stroke="#1a0a3a" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Arms */}
            <path d="M220 285 L185 310" stroke="#f5c5a3" strokeWidth="12" strokeLinecap="round" />
            <path d="M280 285 L315 310" stroke="#f5c5a3" strokeWidth="12" strokeLinecap="round" />

            {/* Keyboard */}
            <rect x="175" y="336" width="150" height="12" rx="6" fill="#1e1e3a" />

            {/* Floating AI Icons */}
            <motion.g>
                {/* Python logo floating */}
                <rect x="360" y="170" width="50" height="50" rx="12" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1" />
                <text x="385" y="202" fontSize="22" textAnchor="middle" fill="#06b6d4">🐍</text>
            </motion.g>

            <rect x="360" y="240" width="50" height="50" rx="12" fill="#0c1a2e" stroke="#06b6d4" strokeWidth="1" />
            <text x="385" y="272" fontSize="22" textAnchor="middle" fill="#06b6d4">🤖</text>

            <rect x="90" y="190" width="50" height="50" rx="12" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1" />
            <text x="115" y="222" fontSize="22" textAnchor="middle">🔥</text>

            <rect x="90" y="260" width="50" height="50" rx="12" fill="#0c1a2e" stroke="#06b6d4" strokeWidth="1" />
            <text x="115" y="292" fontSize="22" textAnchor="middle">📊</text>

            {/* Stars / sparkles */}
            {[[45, 100], [445, 120], [60, 380], [440, 380], [250, 80]].map(([x, y], i) => (
                <g key={i}>
                    <circle cx={x} cy={y} r="3" fill="#7c3aed" opacity="0.8" />
                    <circle cx={x} cy={y} r="6" fill="#7c3aed" opacity="0.2" />
                </g>
            ))}

            {/* Connecting lines */}
            <path d="M360 195 L370 195" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <path d="M140 215 L150 215" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

            {/* Defs */}
            <defs>
                <radialGradient id="radialBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0a14" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="radialBg2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0a0a14" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3730a3" />
                    <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
            </defs>
        </svg>
    );
}

const roles = ["AI/ML Engineer", "LLM Developer", "RAG Pipeline Builder", "Open Source Contributor"];

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg"
        >
            {/* Background */}
            <div className="absolute inset-0 dots-grid opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/10" />

            {/* Blob decorations */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet-600/20 blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-600/15 blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-blob animation-delay-4000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 text-violet-300 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-gradient block">Mahendra</span>
                            <span className="text-white">Kasula</span>
                        </motion.h1>

                        {/* Animated Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="font-mono text-cyan-400 text-xl font-semibold">
                                {"<"} AI/ML Engineer {"/>"}
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-dark-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
                        >
                            Building{" "}
                            <span className="text-violet-400 font-semibold">intelligent systems</span>{" "}
                            with AI, LLMs and automation.
                            Turning ideas into production ML products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <motion.a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-base shadow-lg hover:opacity-95 transition-all"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                View Projects
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass border border-violet-500/40 text-white font-semibold text-base hover:border-violet-400 transition-all"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Download Resume
                            </motion.a>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="flex items-center gap-8"
                        >
                            {[
                                { label: "Years Coding", value: "3+" },
                                { label: "LeetCode", value: "300+" },
                                { label: "OSS PRs", value: "50+" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="font-heading text-2xl font-black text-gradient">{stat.value}</p>
                                    <p className="text-dark-muted text-xs mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-md"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/10 rounded-full blur-3xl scale-110" />
                            <HeroIllustration />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-dark-muted text-xs">Scroll down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-violet-500/40 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-violet-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
