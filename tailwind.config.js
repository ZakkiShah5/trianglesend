/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      
      colors: {
        primary: '#1a2526',
        secondary: '#e7cc93',
      },
      fontFamily: {
        pirate: ['Cinzel', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
};
