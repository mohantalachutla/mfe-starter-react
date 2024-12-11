const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { webpack } = require('@mohantalachutla/mfe-utils/lib/index.cjs');
const { getFallbackConfig } = require('../scripts/index.cjs');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const deps = packageJson.dependencies;

const mfeConfig = require(path.resolve(__dirname, '../mfe.config.json'));

const nodeModules = {
  assert: false,
  buffer: false,
  console: false,
  constants: false,
  crypto: false,
  domain: false,
  events: false,
  fs: false,
  http: false,
  https: false,
  net: false,
  os: false,
  path: false,
  punycode: false,
  process: false,
  querystring: false,
  stream: false,
  string_decoder: false,
  timers: false,
  tty: false,
  url: false,
  util: false,
  vm: false,
  zlib: false,
};

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
      ...getFallbackConfig(nodeModules),
    },
  },
};
