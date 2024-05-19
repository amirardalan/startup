import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};

export default config;
