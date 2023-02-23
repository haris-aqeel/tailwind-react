/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Space Grotesk",
    },
    extend: {
      lineHeight: {
      },
      colors: {
        black: '#0E0C12',
        white: '#ffffff',
        gray: '#D9D9D9',
        "gray-primary": 'rgba(255, 255, 255, 0.08)'

      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(103.94deg, #3C2B9E 0%, #8D08EB 83.97%)",
      },
    },
  },
  plugins: [],
}