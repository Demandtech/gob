/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // background: '#041d24',
        background: '#2c2925',
        primary: '#dbf3fb',
        'primary-btn': '#45c2e8',
        'secondary-btn': '#031217',
        // title: '#ccb089',
        title: '#2c2925',
      },
    },
  },
  plugins: [],
}
