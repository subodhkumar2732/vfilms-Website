/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#fef3ef",      // background
        accent: "#ef4a25",     // orange highlight
        dark: "#1c1c1c",       // text color
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
