module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        'p100': '100px',
        'p200': '200px',
        'p250': '250px',
        'p300': '300px',
        'p400': '400px',
        'p500': '500px',
        'p600': '600px',
        'p700': '700px',
        'p800': '800px',
        'p900': '900px',
        'p1000': '1000px',
        'huge': '10000px',
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw"
      },
      height: {
        'p100': '100px',
        'p200': '200px',
        'p300': '300px',
        'p400': '400px',
        'p500': '500px',
        'p600': '600px',
        'p700': '700px',
        'p800': '800px',
        'p900': '900px',
        'p1000': '1000px',
        'huge': '10000px',
        'screen': '100vh',
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh"
       },
       //was out of "extend":
       screens: {
         'sm': '640px',
         // => @media (min-width: 640px) { ... }
   
         'md': '768px',
         // => @media (min-width: 768px) { ... }
   
         'lg': '1024px',
         // => @media (min-width: 1024px) { ... }
   
         'xl': '1285px',
         // => @media (min-width: 1280px) { ... }
   
         '2xl': '1536px',
         // => @media (min-width: 1536px) { ... }
       },
       minHeight: {
         '700':"700px"
       },
       maxHeight: {
         '0': '0',
         '1/4': '25%',
         '1/2': '50%',
         '3/4': '75%',
         'full': '100%',
         '70vh': '70vh',
         '80vh': '80vh',
         '90vh': '90vh',
        },
       backgroundColor: theme => ({
         ...theme('colors'),
         'light': '#EEEEEE',
         'turq': '#00ADB5',
         'dark': '#393E46',
         'darker': '#222831',
         'turq2': '#41AEA9',
         'appbg': '#fffcf7'
        }),
   
        borderColor: theme => ({
         ...theme('colors'),
          DEFAULT: theme('colors.gray.300', 'currentColor'),
         'turq': '#00ADB5',
         'secondary': '#ffed4a',
         'danger': '#e3342f',
        })
    },
     
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
