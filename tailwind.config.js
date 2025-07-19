/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        cyber: {
          pink: '#ec4899',
          green: '#10b981',
          purple: '#7c3aed',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          black: 'rgba(0, 0, 0, 0.1)',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        '20': '20px',
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(124, 58, 237, 0.5)' },
          '100%': { 'box-shadow': '0 0 30px rgba(124, 58, 237, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}