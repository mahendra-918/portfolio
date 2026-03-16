"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative section-padding bg-dark-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <SectionHeading
                    badge="Journey"
                    title="Experience &"
                    highlight="Achievements"
                    subtitle="Milestones that have shaped my growth as an AI/ML engineer."
                    centered
                />

                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ originY: 0 }}
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent -translate-x-px md:-translate-x-px"
                    />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id + index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 -translate-x-1.5 md:-translate-x-2 mt-1 border-2 border-dark-bg shadow-lg" />

                                {/* Year badge (hidden on mobile, shown md+) */}
                                <div className={`hidden md:flex w-full md:w-[calc(50%-2.5rem)] justify-end ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}>
                                    <span className="px-3 py-1 rounded-full glass border border-violet-500/30 text-violet-400 text-sm font-mono font-bold">
                                        {exp.year}
                                    </span>
                                </div>

                                {/* Card */}
                                <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)]">
                                    <div className="gradient-border bg-dark-card/60 backdrop-blur-sm rounded-2xl p-5 hover:bg-dark-card/80 transition-colors group">
                                        {/* Top row */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                {exp.icon}
                                            </div>
                                            <div>
                                                <span className="md:hidden text-xs text-violet-400 font-mono mb-1 block">{exp.year}</span>
                                                <h3 className="font-heading font-bold text-white text-base leading-tight">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-cyan-400 text-xs font-medium mt-0.5">{exp.organization}</p>
                                            </div>
                                        </div>
                                        <p className="text-dark-muted text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
