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
        container: '1920px',
      },
      colors: {
        gray1: '#9B9B9B',
        gray2: '#505050',
        background: '#191919',
        light: '#EBEBEB',
      },
      backgroundImage: {
        heroBg: "url('/heroBg.webp')",
        experienceBg: "url('/experienceBg.svg')",
        story1Bg: "url('/story1bg.svg')",
        story2Bg: "url('/story2bg.svg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        figTree: ["var(--font-figtree)"],
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
} satisfies Config;
