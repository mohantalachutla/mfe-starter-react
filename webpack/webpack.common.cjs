const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const packageJson = require(path.resolve(__dirname, '../package.json'));
const appUrl = `${packageJson.app.host}:${packageJson.app.port}/`;

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    publicPath: appUrl,
  },

  target: 'web', // target web or node

  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '#': path.resolve(__dirname, '../'),
    },
    mainFiles: ['index'],
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.json'],
    mainFields: ['browser', 'module', 'main'],
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new Dotenv(),
    // new NodePolyfillPlugin(), // to inject polyfills
  ],
};
