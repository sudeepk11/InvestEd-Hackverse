/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter']
    },
    extend: {
      colors: {
        "primary": "#ebf4fa",

        "cover": "#DEEBF1",
        "card": "#CFE2E9"
      }
      
    },
  },
  plugins: [],
}