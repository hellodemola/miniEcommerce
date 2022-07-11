/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      violet: '#4F46E5',
      gray: '#9CA3AF',
      red: '#F43F5E',
      grey: '#D1D5DB',
      darkGray: '#94A3B8',
      black: '#000000',
      dark: '#111827',
      white: '#FFFFFF',
      offGray: '#E2E8F0',
    },
    extend: {
      width: {
        128: '32rem',
        77: '295px',
      },
      height: {
        15: '60px',
        90: '22rem',
      },
    },
  },
  plugins: [],
};
