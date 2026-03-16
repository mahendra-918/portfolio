export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / ML",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    skills: [
      { name: "Python", icon: "🐍", level: 5 },
      { name: "PyTorch", icon: "🔥", level: 4 },
      { name: "TensorFlow", icon: "📊", level: 4 },
      { name: "Scikit-learn", icon: "⚗️", level: 5 },
      { name: "NumPy / Pandas", icon: "🧮", level: 5 },
      { name: "HuggingFace", icon: "🤗", level: 4 },
    ],
  },
  {
    category: "LLM / AI Engineering",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "LangChain", icon: "⛓️", level: 5 },
      { name: "RAG Pipelines", icon: "🔍", level: 5 },
      { name: "Vector Databases", icon: "🗄️", level: 4 },
      { name: "Prompt Engineering", icon: "✍️", level: 5 },
      { name: "OpenAI API", icon: "🤖", level: 5 },
      { name: "Fine-tuning", icon: "🎯", level: 3 },
    ],
  },
  {
    category: "Development",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "JavaScript", icon: "⚡", level: 4 },
      { name: "TypeScript", icon: "📘", level: 4 },
      { name: "React", icon: "⚛️", level: 4 },
      { name: "Node.js", icon: "🟩", level: 3 },
      { name: "Flutter / Dart", icon: "💙", level: 3 },
      { name: "HTML / CSS", icon: "🎨", level: 5 },
    ],
  },
  {
    category: "Dev Tools",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    skills: [
      { name: "Git / GitHub", icon: "🐙", level: 5 },
      { name: "Docker", icon: "🐳", level: 4 },
      { name: "Linux", icon: "🐧", level: 4 },
      { name: "FastAPI", icon: "⚡", level: 5 },
      { name: "VS Code", icon: "💻", level: 5 },
      { name: "Jupyter", icon: "📓", level: 5 },
    ],
  },
];

export const stats = [
  { label: "Years Coding", value: "3+", icon: "💻" },
  { label: "LeetCode Problems", value: "300+", icon: "🧩" },
  { label: "GSoC Contributor", value: "✓", icon: "☀️" },
  { label: "Open Source PRs", value: "50+", icon: "🔀" },
];
