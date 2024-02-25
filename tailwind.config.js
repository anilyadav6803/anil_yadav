/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary':'#079211',
        'white':'#FFFF',
        'light-gray':'#D1D5DB',
        'gray':'#808080',
        'deep-gray':'#0A0A0F',
        'dark':'#101017',
        'deep-dark':'#050507',
      }
    },
  },
  plugins: [],
}

