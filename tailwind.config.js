/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#041d24',
        'secondary-background': '#041d24',
        primary: '#dbf3fb',
        'primary-btn': '#45c2e8',
        'secondary-btn': '#031217',
      },
      boxShadow: {
       'box-shadow': '0px 4px 4px rgba(15, 23, 42, 0.3)'
      }
    },
  },
  plugins: [],
}
