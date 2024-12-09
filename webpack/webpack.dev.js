const path = require('path');

const packageJson = require(path.resolve(__dirname, '../package.json'));
const port = packageJson.app.port;

module.exports = {
  devServer: {
    port: port,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, 'src')],
  },
};
