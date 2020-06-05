const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV;

let plugins = [
  new HtmlWebPackPlugin({
    template: "./app/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
    ignoreOrder: true
  }),
  new CopyPlugin([
    { from: path.join(__dirname, './app/static/images'), to: 'images' },
    { from: path.join(__dirname, './app/static/scripts'), to: 'scripts' },
  ]),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })
];

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  entry: {
    app: path.join(__dirname, './app/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].min.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', 'css'],
    alias: {
      components: path.join(__dirname, 'app/components'),
      containers: path.join(__dirname, 'app/containers'),
      images: path.join(__dirname, 'app/static/images'),
      sharedComponents: path.join(__dirname, 'app/sharedComponents')
    }
  },
  devtool: env === 'development' ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader:  "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }]
      }
    ]
  },
  plugins
};