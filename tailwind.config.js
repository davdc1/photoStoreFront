module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '700':"700px"
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'light': '#EEEEEE',
      'turq': '#00ADB5',
      'dark': '#393E46',
      'darker': '#222831',
      'turq2': '#41AEA9'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
