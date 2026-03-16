"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

function GithubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate submission
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("sent");
        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    const socials = [
        { label: "GitHub", href: "https://github.com/mahendra-918", icon: <GithubIcon />, color: "hover:text-white hover:border-white/30" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mahendra-kasula-98011837a/", icon: <LinkedInIcon />, color: "hover:text-blue-400 hover:border-blue-400/30" },
        { label: "Twitter", href: "https://twitter.com", icon: <TwitterIcon />, color: "hover:text-sky-400 hover:border-sky-400/30" },
    ];

    return (
        <section id="contact" className="relative section-padding bg-dark-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/8 to-transparent" />
            {/* Glow blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-violet-600/10 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionHeading
                    badge="Contact"
                    title="Let&apos;s Build"
                    highlight="Together"
                    subtitle="Open to opportunities, collaborations, and interesting AI/ML projects."
                    centered
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Left — info */}
                    <AnimatedSection direction="right">
                        <div className="space-y-6">
                            {/* Info card */}
                            <div className="gradient-border bg-dark-card/60 backdrop-blur-sm rounded-2xl p-6">
                                <h3 className="font-heading font-bold text-white text-xl mb-4">Get in Touch</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: "📧", label: "Email", value: "kasulamahi624@gmail.com", href: "mailto:kasulamahi624@gmail.com" },
                                        { icon: "📍", label: "Location", value: "India • Remote Available", href: null },
                                        { icon: "⏰", label: "Response Time", value: "Within 24 hours", href: null },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-dark-muted text-xs">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white text-sm font-medium hover:text-violet-400 transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white text-sm font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social links */}
                            <div>
                                <p className="text-dark-muted text-sm mb-3 font-medium">Find me on</p>
                                <div className="flex gap-3">
                                    {socials.map((s) => (
                                        <motion.a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center text-dark-muted transition-all duration-200 ${s.color}`}
                                            aria-label={s.label}
                                        >
                                            {s.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* CTA box */}
                            <div className="bg-gradient-to-br from-violet-600/20 to-cyan-600/10 border border-violet-500/20 rounded-2xl p-5">
                                <h4 className="font-heading font-bold text-white mb-2">Open to Work 🚀</h4>
                                <p className="text-dark-muted text-sm leading-relaxed">
                                    Looking for AI Engineer / ML Engineer roles. Also open to freelance AI/ML projects and research collaborations.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right — form */}
                    <AnimatedSection direction="left" delay={0.2}>
                        <form
                            onSubmit={handleSubmit}
                            className="gradient-border bg-dark-card/60 backdrop-blur-sm rounded-2xl p-6 space-y-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-dark-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-muted focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-muted focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project or opportunity..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-muted focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all text-sm resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status !== "idle"}
                                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${status === "sent"
                                        ? "bg-green-500 text-white"
                                        : "bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90"
                                    }`}
                            >
                                {status === "idle" && "Send Message ✉️"}
                                {status === "sending" && (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </span>
                                )}
                                {status === "sent" && "Message Sent! 🎉"}
                            </motion.button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
