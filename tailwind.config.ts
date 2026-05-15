import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0c2340",
        "navy-light": "#1a365d",
        gold: "#c9a84c",
        "gold-light": "#e8d48b",
        cream: "#faf6f0",
        "cream-dark": "#f0e8d8",
        rose: "#d4a5a5",
        "rose-light": "#f0e0e0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "pulse-gold": "pulse-gold 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(201, 168, 76, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
