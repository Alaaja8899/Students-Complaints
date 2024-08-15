/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      mainColor : '#0D98BA',
      secondColor:'#C7F6C7',
      thirdColor:"#22DD22"
    }
  },
  plugins: [],
}