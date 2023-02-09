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
      boxShadow: {
        // emboss: "inset 0px -3px 3px rgba(0, 0, 0, 0.1), inset 0px 3px 3px rgba(255, 255, 255, 0.25)",
      },
      colors: {
        primary: "rebeccapurple",
      },
      animation: {
        "slide-down": "slide-down 300ms ease-in-out",
        "slide-up": "slide-up 300ms ease-in-out",
        "slide-left": "slide-left 300ms ease-out",
        "toast-in": "toast-in 150ms ease-in-out",
        "toast-out": "toast-out 150ms ease-in-out",
        "bounce-right": "bounce-right 1s infinite",
        "move-background-position": "move-background-position 15s ease infinite",
      },
      gridAutoRows: ({ theme }) => ({
        ...theme("spacing"),
      }),
      gridTemplateColumns: ({ theme }) => ({
        ...Object.entries(theme("spacing")).reduce((prev, [key, value]) => {
          return Object.assign(prev, { [`auto-${key}`]: `repeat(auto-fill,minmax(${value},1fr))` });
        }, {}),
      }),
      height: {
        // "gift-sidebar": "calc(100vh - 56px)",
      },
      keyframes: {
        "slide-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-left": {
          from: {
            opacity: 0,
            transform: "translateX(300px)",
          },
          to: {
            opacity: 100,
            transform: "translateX(0px)",
          },
        },
        "toast-in": {
          from: {
            transform: "translateY(var(--radix-toast-content-height))",
            opacity: 0,
            marginTop: "calc(0px - var(--radix-toast-content-height))",
          },
          to: {
            transform: "translateY(0px)",
            opacity: 1,
            marginTop: 0,
          },
        },
        "toast-out": {
          from: {
            transform: "translateY(var(--radix-toast-swipe-end-y))",
            opacity: 1,
            marginTop: 0,
          },
          to: {
            transform: "translateY(var(--radix-toast-content-height))",
            opacity: 0,
            marginTop: "calc(0px - var(--radix-toast-content-height))",
          },
        },
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(50%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "move-background-position": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
    },
  },
  plugins: [
    require("./tailwind.plugin"),
    require("./tailwind-plugin-radixui"),
    // require("./tailwind-plugin-typography"), // todo
  ],
};
