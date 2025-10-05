/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Green for vegetarian theme
        accent: '#FF9800',  // Orange for buttons/highlights
      },
    },
  },
  plugins: [],
}