import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      serif: ['DM Serif Text', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};

export default config;
