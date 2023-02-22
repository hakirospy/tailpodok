/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.html"],
    theme: {
  
    lineHeight: {
        '18px': '18px',
        
    },
      extend: {
        fontFamily: {
        
            Museo500: ['Museo500', "sans-serif"]
    },
      },
    },
    plugins: [],
  }