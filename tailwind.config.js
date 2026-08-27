/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090E',
          900: '#0C1017',
          850: '#111722',
          800: '#17202F',
          700: '#233047',
          600: '#334460',
        },
        accent: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#34D399',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        electric: {
          blue: '#38BDF8',
          purple: '#818CF8',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
