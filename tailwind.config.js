/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit", /* Just in Time */
  theme: {
    extend: {
      colors: {
        primaryColor: "#070818",
        secondaryColor: "#ada8c5",
        accent: "#171032",
        "dark-100": "#110f27",
        "dark-200": "#0b0527",
        "light-gray": "#f5f5f5",
      },
      boxShadow: {
        customBox: "0px 30px 110px -10px #221f37"
      },
      screens: {
        mini: "450px",
      },
      backgroundImage: {
        "pattern-hero": "url('/src/assets/herobg.png')"
      }
    },
  },
  plugins: [],
};

