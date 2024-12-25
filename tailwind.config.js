/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
        santoshi: ['Santoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

