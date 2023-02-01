/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'page-banner':
          "linear-gradient(to right, rgba(0,0,0 ,0.5), rgba(0,0,0 ,0.5)), url('./assets/images/section-banner.jpg')",

        'hero': "url('./assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
