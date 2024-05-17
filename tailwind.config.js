// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customThinItalic: ['Thin-Italic'],
        customThin: ['Thin'],
        customXLightItalic: ['Xlight-Italic'],
        customXLight: ['Xlight'],
        customLightItalic: ['Light-Italic'],
        customLight: ['Light'],
        customMediumItalic: ['Medium-Italic'],
        customMedium: ['Medium'],
        customRegular: ['Regular'],
        customSemiBoldItalic: ['SemiBold-Italic'],
        customSemiBold: ['SemiBold'],
        customBoldItalic: ['Bold-Italic'],
        customBold: ['Bold'],
        customXBoldItalic: ['XBold-Italic'],
        customXBold: ['XBold'],
        customBlackItalic: ['Black-Italic'],
        customBlack: ['Black'],
        customHeavyItalic: ['Heavy-Italic'],
        customHeavy: ['Heavy'],
        customItalic: ['Italic']
      },
      colors: {
        blackMain: '#0D0D0D',
        greyMain: '#F6F6F7',
        greyLight: '#F8F8F9',
        blueMain: '#5495FC',
        greenMain: '#60EC8E',
        orangeMain: '#FF9900'
      },
      backgroundImage: {
        'home-banner': "url('/assets/images/home-banner.png')"
      }
    },
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    boxShadow: {
      radio: '0px 3px 15px 0px #FFFFFF',
      popover: '0px 4px 32px 0px #00000026',
      'popover-custom': '0px 4px 32px 0px #0000001A',
      'popover-custom-2': '0px 4px 32px 0px #00000008',
      avatar: '0px 0px 4px 0px #00000052',
      'icon-button': '0px 0px 80px 0px #00000026',
      '3xl': '0px 0px 77.42px 0px #0000000D',
      '4xl': '0px 0px 80px 0px #0000000D',
      '5xl': '0px 5px 16px 0px #080F340F',
      '6xl': '0px 0px 64px 0px #0000001A',
      '7xl': '0px 0px 55.19px 0px #0000000D',
      '8xl': '0px 4px 64px 0px #0000001A',
      '9xl': '0px 0px 43.36px 0px #0000000D',
      '10xl': '0px 4px 64px 0px #0000000D',
      '11xl': '0px 3.46px 27.64px 0px #0000001A',
      '12xl': '0px 0px 47.67px 0px #0000000D',
      '13xl': ' 0px 0px 47.3px 0px #0000000D',
      button: '0px 4px 32px 0px #0000000D',
      'text-shadow': ['-1px 0 #60EC8E', '0 1px #60EC8E', '1px 0 #60EC8E', '0 -1px #60EC8E']
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1560px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      })
    })
  ]
}
