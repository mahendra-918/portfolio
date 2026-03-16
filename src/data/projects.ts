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

