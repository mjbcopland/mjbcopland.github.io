const plugin = require("tailwindcss/plugin");

module.exports = plugin((api) => {
  void api.addBase({
    a: { "@apply text-violet-600 hover:underline": true },
    h1: { "@apply text-4xl font-semibold": true },
  });
});
