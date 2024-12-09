const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const deps = packageJson.dependencies;

const mfeConfig = require(path.resolve(__dirname, '../mfe.config.json'));

const getModules = (moduleList = []) => {
  const exposes = moduleList.reduce((acc, module) => {
    return Object.assign(acc, {
      [module]: path.resolve(__dirname, '../src/pages/', module),
    });
  }, {});
  return exposes;
};

module.exports = {
  plugins: [
    webpack.configureMFReactPlugin(ModuleFederationPlugin)(
      mfeConfig.name,
      getModules(mfeConfig.modules),
      deps
    ),
  ],
  resolve: {
    fallback: {
      // core node modules
      process: require.resolve('process/browser'),
      path: require.resolve('path-browserify'),
      assert: false,
      util: false,
      buffer: false,
      fs: false,
      http: false,
      https: false,
      stream: false,
      zlib: false,
      os: false,
      url: false,
      net: false,
      crypto: false,
    },
  },
};
