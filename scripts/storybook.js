import webpackCommon from "../webpack/webpack.common";
import babelConfig from "../babel.config";

export const storybookWebpackConfig = async (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ...webpackCommon.resolve.alias,
    },
    modules: [...config.resolve.modules, ...webpackCommon.resolve.modules],
  };

  return config;
};

export const storybookBabelConfig = async (config) => {
  config.presets = [...config.presets, ...babelConfig.presets];
  config.plugins = [...config.plugins, ...babel.plugins];
  return config;
};

export const storybookTypescriptConfig = async (config) => {
  return config;
};
