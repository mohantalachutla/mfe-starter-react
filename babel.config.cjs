module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }], // with runtime "automatic", we don't have import React in jsx files
    '@babel/preset-env',
  ],
  plugins: ['@babel/transform-runtime'],
};
