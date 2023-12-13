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
