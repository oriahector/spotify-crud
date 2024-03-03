/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '14px 17px 40px 4px',
      },
      borderRadius: {
        primary: '20px',
      }
    },
   
  },
}
