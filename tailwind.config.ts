import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        warm: "#F7F4EF",
        sand: "#E8DED2",
        olive: "#7A8A72",
        charcoal: "#2F2F2F",
        salt: "#B8B6B0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
        script: ["var(--font-script)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(47,47,47,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
