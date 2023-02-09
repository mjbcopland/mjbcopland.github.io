const browserslist = require("browserslist");

module.exports = {
  plugins: [
    [require.resolve("postcss-import"), {}],
    [require.resolve("tailwindcss"), { config: require.resolve("./tailwind.config") }],
    [require.resolve("postcss-preset-env"), { browsers: browserslist(undefined, { env: process.env.NODE_ENV }) }],
  ],
};
