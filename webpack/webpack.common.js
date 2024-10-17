const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const packageJson = require(path.resolve(__dirname, "../package.json"));
const deps = packageJson.dependencies;
const appUrl = packageJson.app.url;

module.exports = {
  output: {
    publicPath: appUrl,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "changeme",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Page": path.resolve(__dirname, "../src/pages/Page.jsx"),
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    new Dotenv(),
  ],
};
