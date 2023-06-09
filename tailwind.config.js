/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // background: '#041d24',
        // background: '#2c2925',
        background: '#ccb089',
        primary: '#dbf3fb',
        'primary-btn': '#45c2e8',
        'secondary-btn': '#031217',
        title: '#ccb089',
        goldbg: 'rgba(218, 165, 32, 0.5)',
        // title: '#2c2925',
        biege: '#F5F5DC',
      },
    },
  },
  plugins: [],
}
