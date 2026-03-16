"use client";

import SectionHeading from "@/components/SectionHeading";
import { SkillCategoryCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
    return (
        <section id="skills" className="relative section-padding bg-dark-bg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionHeading
                    badge="Skills"
                    title="My Technical"
                    highlight="Expertise"
                    subtitle="A curated set of tools and technologies I use to build intelligent AI systems and full-stack applications."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryCard key={category.category} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
