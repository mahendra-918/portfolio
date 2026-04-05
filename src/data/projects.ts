export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Network Security System",
    description:
      "A comprehensive network security and threat detection system.",
    longDescription:
      "An end-to-end network security project focused on analyzing and predicting network threats using machine learning. Includes data preprocessing, model training, and a complete deployment pipeline.",
    tags: ["Python", "Machine Learning", "Security", "FastAPI"],
    github: "https://github.com/mahendra-918/networksecurity",
    demo: "https://github.com/mahendra-918/networksecurity",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
  },
  {
    id: 2,
    title: "End-to-End ML Pipeline",
    description:
      "A complete Machine Learning project pipeline encompassing data ingestion to deployment.",
    longDescription:
      "A structured ML project template that handles the entire lifecycle of a machine learning model, including data ingestion, transformation, model training, evaluation, and CI/CD deployment workflows.",
    tags: ["Python", "CI/CD", "MLOps", "Scikit-learn"],
    github: "https://github.com/mahendra-918/MLProject",
    demo: "https://github.com/mahendra-918/MLProject",
    featured: true,
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
  },
  {
    id: 3,
    title: "NVIDIA NIM RAG",
    description:
      "Retrieval-Augmented Generation implementation leveraging NVIDIA NIMs for optimized inference.",
    longDescription:
      "A high-performance RAG pipeline utilizing NVIDIA NIM microservices. Designed to achieve ultra-low latency and high throughput for enterprise-grade LLM applications.",
    tags: ["Python", "NVIDIA NIM", "RAG", "LLM Inference"],
    github: "https://github.com/mahendra-918/NVIDIA-NIM-RAG",
    demo: "https://github.com/mahendra-918/NVIDIA-NIM-RAG",
    featured: true,
    gradient: "from-orange-500 via-rose-500 to-pink-600",
  },
  {
    id: 4,
    title: "Resume Agent",
    description:
      "An autonomous AI agent that automates job applications — from searching positions to tailoring resumes and submitting applications.",
    longDescription:
      "A fully autonomous AI agent that streamlines the job application process. It searches for relevant positions on LinkedIn, Internshala, Naukri, and Wellfound, tailors resumes using Groq's LLM (llama-3.3-70b-versatile), generates polished PDF/DOCX files, and submits applications via browser automation — all from a single command.",
    tags: ["Python", "LangGraph", "Groq", "Playwright", "FastAPI"],
    github: "https://github.com/mahendra-918/resume-agent",
    demo: "https://github.com/mahendra-918/resume-agent",
    featured: true,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    id: 5,
    title: "Autonomous GitHub Bug Fixer",
    description:
      "An AI agent that autonomously identifies and fixes bugs in GitHub repositories and opens a pull request with the fix.",
    longDescription:
      "An AI-powered automation tool that takes a GitHub repository URL and issue number, analyzes the codebase to determine the root cause, generates a corrected file, and automatically opens a pull request with the fix. Built on a six-node LangGraph pipeline, it uses Groq's Llama 3.3 70B for structured LLM reasoning and exposes a REST API via FastAPI.",
    tags: ["Python", "LangGraph", "Groq", "FastAPI", "Docker", "PyGithub"],
    github: "https://github.com/mahendra-918/Autonomous-GitHub-Bug-Fixer-Agent",
    demo: "https://github.com/mahendra-918/Autonomous-GitHub-Bug-Fixer-Agent",
    featured: true,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
  },
  {
    id: 6,
    title: "Fast QA Chatbot (Groq)",
    description:
      "Question Answering chatbot application built with Groq for ultra-fast LLM inference.",
    longDescription:
      "A responsive QA chatbot leveraging Groq's LPU inference engine to provide near-instantaneous responses. Includes a polished Streamlit web interface.",
    tags: ["Python", "Groq", "Streamlit", "LLMs", "Chatbot"],
    github: "https://github.com/mahendra-918/QA-chatbot-groq",
    demo: "https://app-chatbot-groq-j7pjblewhhq4appidhsfd9j.streamlit.app/",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
  },
];

