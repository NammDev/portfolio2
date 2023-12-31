import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        headerAlphaBackground: 'var(--headerAlphaBackground)',
        buttonBackground1: 'var(--buttonBackground1)',
        buttonForeground1: 'var(--buttonForeground1)',
        buttonHover1: 'var(--buttonHover1)',
        buttonHoverBorder1: 'var(--buttonHoverBorder1)',
        cardBorder: 'var(--cardBorder)',
        cardBorderHover: 'var(--cardBorderHover)',
        cardBorder1: 'var(--cardBorder1)',
        cardBorderHover1: 'var(--cardBorderHover1)',
        tabBar: 'var(--tabBar)',
        foreground2: 'var(--foreground2)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
