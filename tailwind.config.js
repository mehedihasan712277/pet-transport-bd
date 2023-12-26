/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '320px',
        'mm': '375px',
        'ml': '425px',
        'mv': '576px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [require("daisyui")],
}

