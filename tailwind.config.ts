import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9933A",
          light: "#D4A855",
          dark: "#A67A2A",
          muted: "#8B6525",
          faint: "rgba(201,147,58,0.08)",
        },
        ink: "#0a0a0a",
        surface: {
          DEFAULT: "#111111",
          2: "#161616",
          3: "#1e1e1e",
          4: "#252525",
        },
        border: {
          DEFAULT: "#2a2a2a",
          subtle: "rgba(255,255,255,0.06)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      backgroundImage: {
        "grid-gold":
          "linear-gradient(rgba(201,147,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,147,58,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
