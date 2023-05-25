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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

