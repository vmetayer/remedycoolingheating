import type { Config } from "tailwindcss";

// Tailwind v4 reads theme tokens from app/globals.css (@theme block).
// This file documents the design system for reference/tooling.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "remedy-blue": "#0B5FA5",
        "remedy-dark": "#083F6E",
        "remedy-orange": "#F26522",
        "remedy-teal": "#17A398",
        "remedy-mist": "#F4F7FA",
        "remedy-emergency": "#D9342B",
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
