/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg': '800px',
      'xl': '1140px',
      '2xl': '1400px',
    },
    extend: {},
  },
  plugins: [],
});
