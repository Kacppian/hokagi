import colors from 'tailwindcss/colors'

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgba(255, 118, 18, 1)', // Primary color
        heading: 'rgba(25, 43, 53, 0.5)', // Heading color
        background: '#ffffff', // Primary background color (white),
        default: 'rgba(25, 43, 53, 1)',
        blue: 'rgba(31, 107, 255, 1)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Inter font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
