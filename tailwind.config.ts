import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f0ff",
          100: "#e3e3ff",
          200: "#c7c7ff",
          300: "#a89bff",
          400: "#8b68ff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0764",
          DEFAULT: "#7c3aed",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
        },
        dark: {
          bg: "#0a0a14",
          card: "#111128",
          border: "#1e1e3a",
          text: "#e2e2f0",
          muted: "#8888aa",
        },
        light: {
          bg: "#f5f5ff",
          card: "#ffffff",
          border: "#e2e2f0",
          text: "#0a0a14",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Sora", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0a0a14 0%, #1a0a3a 50%, #0a1a2e 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.3)",
        "glow-lg": "0 0 60px rgba(124, 58, 237, 0.4)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
