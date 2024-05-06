/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-bg-color': '#3c40c6'
      },
      backgroundImage: {
        'body-bg-img': 'url("https://flatuicolors.com/static/img/stars-opacity.0979c1.svg")'
      }
    },
  },
  plugins: [],
}