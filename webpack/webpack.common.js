const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const mfeConfig = require(path.resolve(__dirname, '../mfe.config.json'));

const deps = packageJson.dependencies;
const appUrl = `${packageJson.app.host}:${packageJson.app.port}/`;

const getModules = (moduleList = []) => {
  const exposes = moduleList.reduce((acc, module) => {
    return Object.assign(acc, {
      [module]: path.resolve(__dirname, '../src/pages/', module),
    });
  }, {});
  return exposes;
};

module.exports = {
  output: {
    publicPath: appUrl,
  },

  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '#': path.resolve(__dirname, '../'),
    },
    mainFiles: ['index'],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    webpack.configureMFReactPlugin(ModuleFederationPlugin)(
      mfeConfig.name,
      getModules(mfeConfig.modules),
      deps
    ),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new Dotenv(),
  ],
};
