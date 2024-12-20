import webpackCommon from '../webpack/webpack.common.cjs';
const babelConfig = require('../babel.config.cjs');

export const storybookWebpackConfig = async (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ...webpackCommon.resolve.alias,
    },
    modules: [...config.resolve.modules, ...webpackCommon.resolve.modules],
  };
  config.output = {
    ...config.output,
    chunkFormat: 'array-push',
  };
  config.target = 'web';

  return config;
};

export const storybookBabelConfig = async (config) => {
  config.presets = [...config.presets, ...babelConfig.presets];
  config.plugins = [...config.plugins, ...babelConfig.plugins];
  return config;
};

export const storybookTypescriptConfig = async (config) => {
  return config;
};
