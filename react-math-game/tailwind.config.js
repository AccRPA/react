/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [    
    './src/pages/**/*.{js,jsx}'
  ],
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

