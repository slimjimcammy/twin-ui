/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "system-ui", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      keyframes: {
        "gradient-scroll": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "gradient-scroll": "gradient-scroll 8s linear infinite",
      },
    },
  },
  plugins: [],
};
