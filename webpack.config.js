var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/bootstrap.js',
  output: { path: __dirname + '/build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        //include: /sass/,
        loader: ExtractTextPlugin.extract('css!sass'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
  ]
};
