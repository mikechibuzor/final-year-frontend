/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#76453B',
        'secondary': '#FEF0E9',
        'gray-1': '#8E8D8D'
      }
    }
  },
  plugins: []
}
