import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";

import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg dark:bg-dark-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
