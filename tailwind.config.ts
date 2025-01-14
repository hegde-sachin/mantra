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
        "brand-color": "var(--brand-color)",
      },
    },
    fontSize: {
      small: "0.75rem",
      medium: "0.875rem",
      base: "1rem",
      large: "1.125rem",
      xLarge: "1.25rem",
      "2xLarge": "2rem",
      "3xLarge": "2.5rem",
    },
    maxWidth: {
      container: '64rem'
    }
  },
  plugins: [],
} satisfies Config;
