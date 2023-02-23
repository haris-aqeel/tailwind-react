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
      colors: {
        black: '#393939',
        white: '#ffffff'

      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(103.94deg, #3C2B9E 0%, #8D08EB 83.97%)",
      },
    },
  },
  plugins: [],
}