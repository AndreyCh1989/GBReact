const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: "./index.js",
  },
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
      pages: path.join(__dirname, 'src', 'pages'),
      actions: path.join(__dirname, 'src', 'actions'),
      reducers: path.join(__dirname, 'src', 'reducers'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
     template: path.join(__dirname, 'src', 'index.html'),
     fileName: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'src', 'assets', 'img'), to: path.join(__dirname, 'dist', 'img') },
        { from: path.join(__dirname, 'src', 'sw.js'), to: path.join(__dirname, 'dist') },
        { from: path.join(__dirname, 'src', 'manifest.json'), to: path.join(__dirname, 'dist') },
      ],
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
};
