import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent — Aura's blue (electric, readable on dark)
        blue: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#1d4ed8",
          muted: "#1e3a5f",
          faint: "rgba(59,130,246,0.08)",
        },
        // Secondary accent — PhiNova's steel
        steel: {
          DEFAULT: "#6E97C0",
          light: "#93b8d9",
          dark: "#4D7AA8",
        },
        // Background — deep navy-black (PhiNova night mode meets Aura dark)
        ink: "#06111e",
        surface: {
          DEFAULT: "#0b1829",
          2: "#0e1e32",
          3: "#13263d",
          4: "#182f49",
        },
        border: {
          DEFAULT: "#1c3351",
          subtle: "rgba(110,151,192,0.12)",
        },
        // Canvas — PhiNova's warm off-white for body text
        canvas: "#F2F1EE",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
