/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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



