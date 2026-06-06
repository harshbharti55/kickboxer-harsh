import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        redbrand: '#D90429',
        gold: '#FFD700',
        soft: '#F5F5F5',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,215,0,0.18), 0 20px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(217,4,41,.28), transparent 40%), radial-gradient(circle at right, rgba(255,215,0,.13), transparent 28%), linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,0))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
