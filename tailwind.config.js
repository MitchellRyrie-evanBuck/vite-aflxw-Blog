/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{vue,js,ts,jsx,tsx,md}",
    "./docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

