const path = require('path');
const { smart: merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const config = {
  common: {
    resolve: {
      alias: { '~': path.resolve(__dirname, 'src/') },
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          include: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          include: /\.html$/,
          use: ['html-loader'],
        },
        {
          include: /\.(sa|sc|c)ss$/,
          use: ['css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new HtmlWebPackPlugin({ template: 'src/index.html' })],
  },
  development: {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          include: /\.(sa|sc|c)ss$/,
          use: ['style-loader'],
        },
      ],
    },
    plugins: [new ErrorOverlayPlugin()],
  },
  production: {
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          include: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // // Options similar to the same options in webpackOptions.output
        // // both options are optional
        // filename: '[name].css',
        // chunkFilename: '[id].css',
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  },
};

module.exports = (env = 'development') => merge(config[env], config.common);
