const path = require('path');
const webpack = require('webpack');
const { smart: merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  common: {
    resolve: {
      alias: { '~': path.resolve(__dirname, 'src/') },
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          include: /\.m?(j|t)sx?$/,
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
        {
          exclude: /\.(m?(j|t)sx?|json|html|(sc|sa|c)ss)$/,
          use: ['file-loader'],
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
    plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }), new ErrorOverlayPlugin()],
  },
  production: {
    mode: 'production',
    module: {
      rules: [
        {
          include: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader],
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
      new webpack.NormalModuleReplacementPlugin(
        /iconSvgPaths\.js/,
        path.resolve(__dirname, 'src/iconSvgPaths.js'),
      ),
      new MiniCssExtractPlugin(),
    ],
    optimization: {
      minimizer: [new TerserPlugin({ parallel: true }), new OptimizeCSSAssetsPlugin()],
    },
  },
};

module.exports = (env) => merge(config[env], config.common);
