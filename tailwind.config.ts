import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      small: "0.75rem",
      medium: "0.875rem",
      base: "1rem",
      xLarge: "1.25rem",
      large: "1.125rem",
    }
  },
  plugins: [],
} satisfies Config;
