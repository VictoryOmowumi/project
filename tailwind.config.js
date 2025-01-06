/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#116f76',
          50: '#e0f7f8',
          100: '#b3ecee',
          200: '#2e8086',
          300: '#4dd4d8',
          400: '#26c9cd',
          500: '#116f76', // Your custom indigo color
          600: '#0e5b60',
          700: '#0b474a',
          800: '#083334',
          900: '#051f1e',
        },
        "primary-green" : "#c8f461",
        
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};