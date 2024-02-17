/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        text_color:"#A61B1A",
      },
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"]
      },
      colors:{
        blue:"#060033"
      }
    },
  },
  plugins: [],
}

