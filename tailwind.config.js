/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      mainColor : '#074B85',
      secondColor:'#42AB6E',
      
      thirdColor:"#22DD22"
    }
  },
  plugins: [],
}