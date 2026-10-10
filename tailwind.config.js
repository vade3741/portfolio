/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#c9a86c",
        "accent-light": "#e8d5a8",
        dark: {
          900: "#080617",
          800: "#0e0b22",
          700: "#17132d",
          600: "#282343",
          500: "#38325e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
