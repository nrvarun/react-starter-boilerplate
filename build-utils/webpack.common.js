const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const config = {
  entry: {
    // vendor: ['']
  },
  output: {
    path: commonPaths.outputPath,
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    StylelintPlugin()
  ]
};
module.exports = config;
