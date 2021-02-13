const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './SF-Drive/QA-page/src/scripts/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './SF-Drive/QA-page/dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './SF-Drive/QA-page/src/index.html',
    }),
  ],
};
