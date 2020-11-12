const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const join = require('path').join;

module.exports = {
  entry: join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  output: {
    filename: "main.js",
    path: join(__dirname, '/dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, '/src/index.html')
    })
  ],
};