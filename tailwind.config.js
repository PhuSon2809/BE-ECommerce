/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blackMain: '#0D0D0D',
        greyMain: '#F6F6F7',
        blueMain: '#5495FC',
        greenMain: '#60EC8E'
      }
    },
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: []
}
