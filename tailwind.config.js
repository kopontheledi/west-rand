/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        school: {
          navy: '#092B45',
          red: '#C91D2B',
          blue: '#1689BE',
          orange: '#F07832',
          pale: '#F4F7F9'
        }
      }
    }
  },
  plugins: []
}