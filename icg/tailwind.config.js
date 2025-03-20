/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['Marcellus', 'serif'], // Add Marcellus font
      },
    },
  },
  plugins: [],
};