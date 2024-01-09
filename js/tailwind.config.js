/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#F8A3BC',
        'dark_pink': '#CE4A7E',
      },
    },
  },
  plugins: [require("daisyui")],
}
