const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
