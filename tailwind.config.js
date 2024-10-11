/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // 'custom-blue': '#0866ff',  // Custom blue color
        'custom-blue': '#3498db'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'pixelify': ['Pixelify'],
        'montserrat': ['Montserrat'],
        'orbitron': ['Orbitron'],
      },
      colors: {
        // 'custom-blue': '#0866ff',  // Custom blue color
        'custom-blue': '#3498db'
      },
      borderColor: {
        // 'custom-blue': '#0866ff',  // Custom blue color
        'custom-blue': '#3498db'
      }
    },
  },
  plugins: [],
}
