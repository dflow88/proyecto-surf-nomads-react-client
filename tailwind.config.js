const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      teal: colors.teal,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      sky: colors.sky,
      azul: {
        light: "#5e84ff"
      },
      aspectRatio: { // defaults to {}
        'none': 0,
        'square': [1, 1], // or 1 / 1, or simply 1
        '16/9': [16, 9],  // or 16 / 9
        '4/3': [4, 3],    // or 4 / 3
        '21/9': [21, 9],  // or 21 / 9
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-aspect-ratio')]
}