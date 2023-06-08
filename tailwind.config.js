// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'giga': '2000px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}