/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: 'hsl(0, 0%, 100%)',
      pink: 'hsl(275, 100%, 97%)',
      purpleLight: 'hsl(292, 16%, 49%)',
      purpleDark: 'hsl(292, 42%, 14%)',
    },
    fontFamily: {
      workSans: ["'Work Sans'", 'sans-serif'],
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
*/
