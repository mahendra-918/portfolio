"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const directionMap = {
        up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
        down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
        left: { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1 } },
        right: { hidden: { x: -80, opacity: 0 }, visible: { x: 0, opacity: 1 } },
        fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={directionMap[direction]}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
