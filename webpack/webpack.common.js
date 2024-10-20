const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const _ = require("lodash");

const packageJson = require(path.resolve(__dirname, "../package.json"));
const mfeConfig = require(path.resolve(__dirname, "../mfe.config.json"));

const deps = packageJson.dependencies;
const appUrl = `${packageJson.app.host}:${packageJson.app.port}/`;

// validating mfe name
// module federation does not allow specail characters in the name
const validateMfeName = (mfeName) => {
  if (_.isEmpty(mfeName)) {
    throw new Error("InvalidMfeName: mfe name should not be empty");
  }
  const reg = new RegExp("[^a-zA-Z0-9_]", "g");
  if (reg.test(mfeName)) {
    throw new Error(
      `InvalidMfeName: mfe name ${mfeName} should not contain special characters`
    );
  }
};

validateMfeName(mfeConfig.name);

const getModules = (moduleList = []) => {
  const exposes = moduleList.reduce((acc, module) => {
    return Object.assign(acc, {
      [module]: path.resolve(__dirname, "../src/pages/", module),
    });
  }, {});
  console.debug(`mfe: ${mfeConfig.name} exposes `, exposes);
  return exposes;
};

module.exports = {
  output: {
    publicPath: appUrl,
  },

  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    mainFiles: ["index"],
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
      name: mfeConfig.name,
      filename: "remoteEntry.js",
      library: { type: "var", name: mfeConfig.name },
      exposes: {
        "./App": "./src/App",
        ...getModules(mfeConfig.modules),
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
