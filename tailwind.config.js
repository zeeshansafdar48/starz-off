/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        primary: {
          900: "#091b2e",
          800: "#0a2136",
          700: "#0b263f",
          600: "#0c2b48",
          500: "#0d253f",
          400: "#213e59",
          300: "#365672",
          200: "#4b6e8c",
          100: "#6087a6"
        },
        secondary: {
          900: "#016b8c",
          800: "#0185a8",
          700: "#0190b8",
          600: "#019ac9",
          500: "#01b4e4",
          400: "#33c2ea",
          300: "#66d0ef",
          200: "#99def4",
          100: "#ccebf9"
        },
        tertiary: {
          900: "#4a7958",
          800: "#5f8d6c",
          700: "#74a280",
          600: "#89b794",
          500: "#90cea1",
          400: "#a8d6b4",
          300: "#c0dec7",
          200: "#d8e6da",
          100: "#f0eee9"
        }
      }
    }
  },
  plugins: []
};
