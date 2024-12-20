/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgMain': "#1E2619",
      },
      textColor: {
        'secondary': "#799D32"
      },
      
    },
  },
  plugins: [],
}