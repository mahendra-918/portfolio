"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({
    badge,
    title,
    highlight,
    subtitle,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={`mb-14 ${centered ? "text-center" : ""}`}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 text-violet-400 text-sm font-medium mb-4 ${centered ? "mx-auto" : ""}`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    {badge}
                </motion.div>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
                {title}{" "}
                {highlight && <span className="text-gradient">{highlight}</span>}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 text-dark-muted text-base sm:text-lg max-w-2xl leading-relaxed"
                    style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ originX: centered ? 0.5 : 0 }}
                className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 ${centered ? "mx-auto" : ""}`}
            />
        </div>
    );
}
