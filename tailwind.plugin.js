const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase, addComponents }) => {
  addBase({
    a: {
      "@apply text-violet-600 hover:underline": true,
    },
  }),
    addBase({
      "input[type=search]::-webkit-search-cancel-button": {
        display: "none",
      },

      "input, textarea": {
        "@apply border leading-loose px-4 py-2 rounded-lg": true,
        "@apply bg-white border-zinc-200 hover:border-zinc-300 focus:border-primary": true,
        "@apply dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:focus:border-primary": true,
        "@apply focus:outline focus:outline-2 focus:outline-primary/25": true,
      },
    });

  addComponents({
    ".button": {
      "@apply cursor-pointer disabled:cursor-not-allowed": true,
      "@apply rounded leading-snug": true,

      "&.button-primary": {
        "@apply text-white bg-primary disabled:bg-primary hover:bg-primary/90": true,
      },

      "&.button-secondary": {
        "@apply bg-white disabled:bg-white hover:bg-zinc-100": true,
        "@apply dark:bg-zinc-800 dark:disabled:bg-zinc-800 dark:hover:bg-zinc-700": true,
        "@apply ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700 shadow-sm": true,
        "@apply text-zinc-700 disabled:text-zinc-400 dark:text-zinc-200 dark:disabled:text-zinc-500": true,
      },

      "&.button-tertiary": {
        "@apply bg-none disabled:bg-none hover:bg-zinc-100/90": true,
        "@apply dark:hover:bg-zinc-100/10": true,
      },

      "&.button-lg": {
        "@apply px-4 py-2": true,
      },

      "&.button-sm": {
        "@apply px-2 py-1": true,
      },
    },

    ".card": {
      "@apply bg-white dark:bg-zinc-800 rounded-lg shadow-lg": true,
    },

    ".h1": {
      "@apply text-4xl font-bold": true,
    },
  });
});
