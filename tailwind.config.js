/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1a2c38",
        secondary:"#23313d",
        white: '#fff',
        gray: "#",
        accentColor: "#1ac238"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}
