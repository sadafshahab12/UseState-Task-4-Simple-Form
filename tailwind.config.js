/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        bgImage: "url('/images/bg-1.jpg')"
      }
    },
  },
  plugins: [],
}