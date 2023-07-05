/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`index.html`],
  theme: {
    fontFamily: {
      'poppins' :['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: `#14b8a6`,
        dark: `#0f172a`,
      }
    },
  },
  plugins: [],
}

