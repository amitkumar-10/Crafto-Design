/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGray: "#333336ff", // your custom dark gray
      },
      backgroundImage: {
        'background-image': "url('/images/background.jpg')",
      },
    },
  },
  plugins: [],
}
