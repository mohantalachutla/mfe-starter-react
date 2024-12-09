const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

/**
 * The function returns a webpack configuration object based on mode.
 * @function
 * @param {Object} env - Webpack environment variables
 * @param {Object} argv - Webpack CLI arguments
 * @param {string} argv.mode - Webpack mode (development or production)
 * @returns {Object} Webpack configuration
 * @throws Will throw an error if mode is not set or not found
 */
module.exports = (env, { mode }) => {
  let config = {};
  try {
    switch (mode) {
      case 'development':
        config = require('./webpack.dev.js');
        break;
      case 'production':
        config = require('./webpack.prod.js');
        break;
      default:
        throw new Error(
          'webpack/webpack.config.js: Environment not set or not found'
        );
    }
    return merge(commonConfig, config);
  } catch {
    throw new Error(
      'webpack/webpack.config.js: Environment not set or not found'
    );
  }
};
