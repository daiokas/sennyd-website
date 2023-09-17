const colors = require('tailwindcss/colors')

module.exports = {
  content: [ './src/**/*.{js,tsx}' ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        gray: {
          ...colors.gray,
          DEFAULT: '#777777',
        },
        black: {
          DEFAULT: '#000',
        },
      },
    },
    fontFamily: {
      sans: [
        // --- fallback
        // Default Google Fonts
        '"M PLUS 1p"',
        // Safari for macOS and iOS (San Francisco)
        '-apple-system',
        // Chrome < 56 for macOS (San Francisco)
        'BlinkMacSystemFont',
        // Windows
        'Segoe UI',
        // Android
        'Roboto',
        // Basic web fallback
        'Helvetica Neue',
        // Basic Ja fallback
        'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
        // Basic web fallback
        'Arial',
        // Windows Ja
        'Yu Gothic', 'Meiryo',
        // Linux
        'Noto Sans',
        'Liberation Sans',
        // Sans serif fallback
        'sans-serif',
        // Emoji fonts
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' ],
      serif: [
        'Times New Roman', 'YuMincho', 'Hiragino Mincho ProN',
        'Yu Mincho', 'MS PMincho',
        // Serif fallback
        'serif',
        // Emoji fonts
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji',
      ],
      ranget: [
        'Ranget Regular',
        // Basic web fallback
        'Helvetica Neue',
        // Basic Ja fallback
        'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
        // Basic web fallback
        'Arial',
        // Sans serif fallback
        'sans-serif',
      ],
    },
  },
}
