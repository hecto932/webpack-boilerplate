'use strict'

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'), // entry points
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(c|sc)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 9000, // server port
    hot: true, // hot module reload
    contentBase: path.resolve(__dirname), // content base path
    compress: true // compression
  }
}