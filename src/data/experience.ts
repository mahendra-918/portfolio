export interface Experience {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "achievement" | "education" | "project";
  color: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    year: "2025 - Present",
    title: "Diving into AI & Machine Learning",
    organization: "Independent Learning & Projects",
    description:
      "Transitioned into Artificial Intelligence and Machine Learning. Building end-to-end ML pipelines, exploring Large Language Models, and developing RAG-based systems.",
    type: "project",
    color: "from-violet-400 to-purple-500",
    icon: "🤖",
  },
  {
    id: 2,
    year: "2025",
    title: "Google Summer of Code Contributor",
    organization: "Google / Open Source",
    description:
      "Selected as a contributor for GSoC 2025. Made significant contributions to large-scale open source repositories, improving core logic and collaborating with mentors.",
    type: "achievement",
    color: "from-yellow-400 to-orange-500",
    icon: "☀️",
  },
  {
    id: 3,
    year: "2024",
    title: "300+ LeetCode Problems Solved",
    organization: "LeetCode",
    description:
      "Mastered Data Structures and Algorithms by solving 300+ problems across dynamic programming, graphs, and trees. Built a strong foundation in problem-solving and system design.",
    type: "achievement",
    color: "from-green-400 to-emerald-500",
    icon: "🧩",
  },
  {
    id: 4,
    year: "2024",
    title: "Started Programming Journey",
    organization: "Self-Taught / University",
    description:
      "Began my formal journey into Computer Science and software engineering. Learned core programming languages, web development fundamentals, and computer architecture.",
    type: "education",
    color: "from-blue-400 to-indigo-500",
    icon: "🚀",
  },
];
