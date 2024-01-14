import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-soft-color': 'var(--text-soft-color)',
        'bg-soft-color': 'var(--bg-soft-color)',
      },
    },
  },
  plugins: [],
};
export default config;
