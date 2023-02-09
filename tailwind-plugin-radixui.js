const plugin = require("tailwindcss/plugin");

/** Inspired by @headlessui/tailwindcss but for Radix UI */
module.exports = plugin.withOptions(({ prefix = "ui" } = {}) => {
  return ({ addVariant }) => {
    for (let state of ["open", "closed", "active"]) {
      // TODO: Once `:has()` is properly supported, then we can switch to this version:
      // addVariant(`${prefix}-${state}`, [
      //   `&[data-state~="${state}"]`,
      //   `:where([data-state~="${state}"]):not(:has([data-state])) &`,
      // ])

      // But for now, this will do:
      addVariant(`${prefix}-${state}`, [`&[data-state~="${state}"]`, `:where([data-state~="${state}"]) &`]);

      addVariant(`${prefix}-not-${state}`, [
        `&[data-state]:not([data-state~="${state}"])`,
        `:where([data-state]:not([data-state~="${state}"])) &:not([data-state])`,
      ]);
    }
  };
});
