/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-purple': '#8A7B9F',
        'wedding-light': '#F8F6F9',
        'wedding-dark': '#433A52',
      },
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playwright: ['"Playwright US Trad"', 'serif'],
        'script': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
