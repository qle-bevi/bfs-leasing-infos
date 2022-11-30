const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        bmw: ['BMWTypeNextTT', ...theme.fontFamily.serif]
      },
      colors: {
        'bmw-gray': '#707070',
        'bmw-blue': '#0066B1',
        'bmw-light-gray': '#B3B3B3',
        'bmw-very-light-gray': '#E7E6E6'
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
