const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dev-build'),
  },
  devServer: {
    static: './dev-build',
    hot: true,
    open: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'resources', to: 'resources' },
        { from: 'include', to: 'include' },
        { from: 'data.js', to: 'data.js' },
        { from: 'grid.js', to: 'grid.js' },
        { from: 'styles.css', to: 'styles.css' }
      ]
    })
  ]
});