/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#041d24',
        primary: '#dbf3fb',
        'primary-btn': '#45c2e8',
        'secondary-btn': '#031217',
        title: '#924527',
      },
    },
  },
  plugins: [],
}
