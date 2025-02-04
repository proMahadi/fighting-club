import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
      },
      colors: {
        gray1: '#9B9B9B',
        gray2: '#505050',
        background: '#191919',
        light: '#EBEBEB',
      },
      backgroundImage: {
        heroBg: "url('../assets/heroBg.webp')",
        experienceBg: "url('../assets/experienceBg.svg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        figTree: ["var(--font-figtree)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
