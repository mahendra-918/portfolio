"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { stats } from "@/data/skills";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
    return (
        <section id="about" className="relative section-padding bg-dark-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — visual */}
                    <AnimatedSection direction="right">
                        <div className="relative">
                            {/* Main card */}
                            <div className="gradient-border bg-dark-card/60 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-600/20 to-transparent rounded-3xl" />

                                {/* Avatar placeholder */}
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-5xl font-heading font-black text-white">
                                        M
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-green-400 border-2 border-dark-bg flex items-center justify-center">
                                        <span className="text-xs">✓</span>
                                    </div>
                                </div>

                                <h3 className="font-heading text-xl font-bold text-white text-center mb-1">
                                    Mahendra Kasula
                                </h3>
                                <p className="text-violet-400 text-sm text-center mb-6">AI/ML Engineer · GSoC Contributor</p>

                                {/* Floating stat cards */}
                                <div className="grid grid-cols-2 gap-3">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + 0.3 }}
                                            className="bg-white/5 rounded-xl p-4 text-center border border-white/5"
                                        >
                                            <div className="text-2xl mb-1">{stat.icon}</div>
                                            <div className="font-heading font-black text-xl text-gradient">{stat.value}</div>
                                            <div className="text-dark-muted text-xs mt-1">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Badge floating */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 px-4 py-3 glass rounded-xl border border-violet-500/30"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">🏆</span>
                                    <div>
                                        <p className="text-white text-xs font-semibold">GSoC 2025</p>
                                        <p className="text-dark-muted text-xs">Contributor</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-4 -right-4 px-4 py-3 glass rounded-xl border border-cyan-500/30"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">🧩</span>
                                    <div>
                                        <p className="text-white text-xs font-semibold">300+ Problems</p>
                                        <p className="text-dark-muted text-xs">LeetCode</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    {/* Right — content */}
                    <AnimatedSection direction="left" delay={0.2}>
                        <SectionHeading
                            badge="About Me"
                            title="Passionate about"
                            highlight="Intelligent Systems"
                            subtitle=""
                        />

                        <p className="text-dark-muted text-base sm:text-lg leading-relaxed mb-6">
                            I&apos;m a <span className="text-violet-400 font-semibold">Computer Science student</span> passionate about
                            Artificial Intelligence, Machine Learning and building real-world AI systems. I enjoy working with
                            <span className="text-cyan-400 font-semibold"> LLMs, automation</span> and scalable ML systems.
                        </p>

                        <p className="text-dark-muted text-base leading-relaxed mb-8">
                            From training custom models to deploying production RAG pipelines, I love every layer of the AI stack.
                            Currently contributing to open-source ML projects and always learning what&apos;s next in AI.
                        </p>

                        {/* Skills highlights */}
                        <div className="space-y-3">
                            {[
                                { label: "Machine Learning & Deep Learning", pct: 90, color: "from-violet-500 to-purple-500" },
                                { label: "LLM Engineering & RAG Pipelines", pct: 92, color: "from-cyan-500 to-teal-500" },
                                { label: "Full Stack Development", pct: 75, color: "from-emerald-500 to-green-500" },
                                { label: "MLOps & Deployment", pct: 80, color: "from-orange-500 to-amber-500" },
                            ].map((skill, i) => (
                                <div key={skill.label}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-white font-medium">{skill.label}</span>
                                        <span className="text-sm text-dark-muted">{skill.pct}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                                            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="flex gap-3 mt-8">
                            {[
                                { label: "GitHub", href: "https://github.com/mahendra-918", icon: "⌨️" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/mahendra-kasula-98011837a/", icon: "💼" },
                                { label: "Twitter", href: "https://twitter.com", icon: "🐦" },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 hover:border-violet-500/40 text-sm text-dark-muted hover:text-white transition-all"
                                >
                                    <span>{social.icon}</span>
                                    {social.label}
                                </motion.a>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
