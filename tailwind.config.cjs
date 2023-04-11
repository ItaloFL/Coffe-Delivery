/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Baloo 2']
      },
      
      gridTemplateColumns: {
        checkout: '640px 448px',
        inputGrid: '200px 1fr',
        secondInputGrid: '200px 276px 60px'
      },

      backgroundImage: {
        app: 'url(src/assets/background.png)'
      },

      colors: {
        yellow: {
          100: '#F1E9C9',
          300: '#DBAC2C',
          500: '#C47F17'
        },

        purple: {
          100: '#EBE5F9',
          300: '#8047F8',
          500: '#4B2995'
        },

        base: {
          900: '#272221',
          800: '#403937',
          700: '#574F4D',
          600: '#8D8686',
          500: '#D7D5D5',
          400: '#E6E5E5',
          300: '#EDEDED',
          200: '#F3F2F2',
          100: '#FAFAFA'
        }
      },

      borderColor: {
        gradient: 'hsl(44, 71, 52, 100%)'
      }
    }
  },
  plugins: []
}
