/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "body": ["Karla", "sans-serif"],
      },
      colors: {
        "primary-cyan": "hsl(179 62% 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "gray-blue": "hsl(218, 22%, 67%)"
      }
    },
  },
  plugins: [],
}

