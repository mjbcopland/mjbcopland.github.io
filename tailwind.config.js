const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        primary: "rebeccapurple",
      },
    },
  },
  plugins: [require("./tailwind.plugin")],
};
