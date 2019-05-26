const path = require('path');
const webpack = require('webpack');
const { smart: merge } = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  common: {
    output: {
      publicPath: '/dist',
    },
    resolve: {
      alias: { '~': path.resolve(__dirname, 'src/') },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
      rules: [
        {
          include: /\.html$/,
          use: ['html-loader'],
        },
        {
          include: /\.mp3$/,
          use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]', publicPath: '/', emitFile: false } }],
        },
        {
          include: /\.(sa|sc|c)ss$/,
          use: ['css-loader', 'sass-loader'],
        },
        {
          include: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },
    plugins: [new HtmlWebPackPlugin({ template: 'src/index.html', filename: '../index.html', hash: true })],
    optimization: {
      minimizer: [new TerserPlugin({ parallel: true }), new OptimizeCSSAssetsPlugin()],
    },
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
    plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })],
  },
  production: {
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          include: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader],
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
      new webpack.NormalModuleReplacementPlugin(/iconSvgPaths\.js/, path.resolve(__dirname, 'src/iconSvgPaths.js')),
      new MiniCssExtractPlugin(),
    ],
  },
};

module.exports = (env) => merge(config[env], config.common);
