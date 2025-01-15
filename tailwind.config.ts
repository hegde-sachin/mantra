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
      base: "1rem",
      large: "1.25rem",
      xLarge: "1.5rem",
      "2xLarge": "1.75rem",
      "3xLarge": "2rem",
      "4xLarge": "2.25rem",
      "5xLarge": "2.5rem",
    },
    maxWidth: {
      container: '64rem'
    }
  },
  plugins: [],
} satisfies Config;
