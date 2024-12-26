const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-warnings',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' }, // Copies files from `public/assets` to `dist/assets`
      ],
    }),
  ],
};
