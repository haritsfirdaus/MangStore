/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html.js}'],
  theme: {
    extend: {
      backgroundImage : {
        'bg_home': 'image/bg-home.svg' 
      }
    },
  },
  plugins: [],
}

