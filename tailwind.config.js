/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FFFFFF",
        primaryLime: "#A1CF14",
        primaryTitle: "#404040", // h2

        primaryDark: "#171717", // download buttons, svg's background

        dimWhite: "rgba(255, 255, 255, 0.7)", // navbar

        sunsetYellow: "#FBB528", // star button
        secondaryDarkgrey: "#D9D9D9", // star div's background

        secondaryLightGrey: "#EFEFEF", // advantages card, how-it-works component background
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
