import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    color: {
      primary: '#FF0000',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
