import webpackCommon from "../webpack/webpack.common";

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
