/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,.vue}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
