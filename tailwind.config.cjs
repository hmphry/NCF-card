/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0a0a0a',
        'grey': '#333',
        'pink': {  DEFAULT: '#E6098A',  50: '#FCABDA',  100: '#FB97D1',  200: '#F970C0',  300: '#F849AF',  400: '#F6219E',  500: '#E6098A',  600: '#B0076A',  700: '#7A0549',  800: '#440329',  900: '#0E0108'},
        'blue': {  DEFAULT: '#2AA9E1',  50: '#CBEAF8',  100: '#B9E3F5',  200: '#95D4F0',  300: '#72C6EB',  400: '#4EB7E6',  500: '#2AA9E1',  600: '#1A88B9',  700: '#136488',  800: '#0C4057',  900: '#051C25'},
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}