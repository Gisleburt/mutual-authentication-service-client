const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: distDir,
  },
  devtool: 'sourcemap',
  devServer: {
    contentBase: distDir,
    compress: true,
    port: 8000,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(srcDir, 'index.html'),
  })],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : srcDir,
        loader : 'babel-loader'
      }
    ]
  }
};
