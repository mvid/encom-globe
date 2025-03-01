const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Common configuration shared between development and production
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'encom-globe.js',
    path: path.resolve(__dirname, '../dist'),
    library: {
      name: 'Globe',
      type: 'var',
      export: 'default'
    },
    clean: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: []
};