/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bigDark': '#172135',
        'bigLight': '#e6e6e6',
      },
    },
  },
  plugins: [],
}

