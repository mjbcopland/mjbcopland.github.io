const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: { '~': path.resolve(__dirname, 'src/') },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin({ template: 'src/index.html' })],
};
