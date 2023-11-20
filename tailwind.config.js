/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        'rotate360': 'rotate360 20s linear infinite',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)'},
          '60%': { transform: 'rotate(180deg) scaleX(1.5)'},
          '100%': { transform: 'rotate(360deg)'},
        },
      },
      colors: {
        primary: "#050c16",
        secondary: "#a6b6c3",
        tertiary: "#102930",
        "black-100": "#0d1825",
        "black-200": "#031325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./assets/bg-hero-main.png')",
      },
    },
  },
  plugins: [],
};