/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e7f2d8",
          200: "#cfe5b0",
          300: "#b6d889",
          400: "#9ecb61",
          500: "#86be3a",
          600: "#6b982e",
          700: "#507223",
          800: "#364c17",
          900: "#1b260c",
        },
        secondary: {
          100: "#fbfcfc",
          200: "#f7faf9",
          300: "#f3f7f6",
          400: "#eff5f3",
          500: "#ebf2f0",
          600: "#bcc2c0",
          700: "#8d9190",
          800: "#5e6160",
          900: "#2f3030",
        },
      },
    },
  },
  plugins: [],
};
