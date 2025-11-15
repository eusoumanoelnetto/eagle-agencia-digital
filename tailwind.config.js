/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1a2a4c',
        'brand-gold': '#c0a062',
        'brand-light': '#f7f4ef',
        'brand-gray': '#333333',
        // Cores para o modo escuro
        'brand-dark': '#111827', // bg principal
        'brand-dark-secondary': '#1f2937', // bg de cards
        'brand-light-gray': '#d1d5db', // texto
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    }
  },
  plugins: [],
}