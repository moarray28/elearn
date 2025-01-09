/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyline-blue': '#002F6C',
        'cobalt-depth': '#004F8C',
        'fresh-teal': '#34d399',
        'golden-ember': '#D7C14C',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
