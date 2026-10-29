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
        bg: '#0B1B30',
        redbrand: '#FF4D6D',
        gold: '#E8C56A',
        soft: '#F5F5F5',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,215,0,0.18), 0 20px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(64,177,224,.24), transparent 42%), radial-gradient(circle at right, rgba(232,197,106,.13), transparent 30%), linear-gradient(180deg, rgba(35,76,119,.22), rgba(8,20,38,.08))',
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
