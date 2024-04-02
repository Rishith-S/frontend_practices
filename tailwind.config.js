/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700: '#146ebb',
          800: '#146eb4',
          900: '#0e4f82',
          1000 : '#1e2640',
          1200 : '#0f6ab2'
        },
        gray:{
          1000 : '#353c53',
          1100 : '#4a5065',
          1200 : '#fafafa'
        }
      },
      boxShadow : {
        '3xl' : "-1px 3px 6px -1px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}