/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      colors: {
        main: '#5CA768',
        accent: '#5CA768',
        dark: '#232425',
      },
      backgroundImage: {
        'main-img': "url('/Assets/bg-welcome.webp')",
      },
    },
  },
  plugins: [],
}
