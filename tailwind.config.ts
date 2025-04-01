import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-color": "var(--brand-color)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-11": "var(--accent-11)"
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
    },
    height: {
      header: '5rem',
      mainLink: '3rem',
    },
    minHeight: {
      main: 'calc(100dvh - 5rem)'
    }
  },
  plugins: [],
} satisfies Config;
