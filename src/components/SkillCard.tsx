"use client";

import { motion } from "framer-motion";
import { Skill, SkillCategory } from "@/data/skills";

interface SkillPillProps {
    skill: Skill;
    index: number;
    color: string;
    bgColor: string;
    borderColor: string;
}

export function SkillPill({ skill, index, color, bgColor, borderColor }: SkillPillProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.08, y: -2 }}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${bgColor} border ${borderColor} cursor-default transition-all duration-200`}
        >
            <span className="text-lg leading-none">{skill.icon}</span>
            <span className={`text-sm font-semibold ${color}`}>{skill.name}</span>
            {/* Level dots */}
            <div className="flex gap-0.5 ml-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                        key={dot}
                        className={`w-1 h-1 rounded-full transition-colors ${dot <= skill.level ? color.replace("text-", "bg-") : "bg-white/10"
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
}

interface SkillCategoryCardProps {
    category: SkillCategory;
    index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="gradient-border bg-dark-card/60 backdrop-blur-sm rounded-2xl p-6"
        >
            <div className="flex items-center gap-3 mb-5">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${index === 0 ? "from-violet-500 to-purple-500" :
                        index === 1 ? "from-cyan-500 to-teal-500" :
                            index === 2 ? "from-emerald-500 to-green-500" :
                                "from-orange-500 to-amber-500"
                    }`} />
                <h3 className={`font-heading font-bold text-lg ${category.color}`}>
                    {category.category}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                    <SkillPill
                        key={skill.name}
                        skill={skill}
                        index={i}
                        color={category.color}
                        bgColor={category.bgColor}
                        borderColor={category.borderColor}
                    />
                ))}
            </div>
        </motion.div>
    );
}
