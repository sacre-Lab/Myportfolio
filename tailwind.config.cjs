/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
