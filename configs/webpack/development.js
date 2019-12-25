const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const AutoprefixerPlugin = require('autoprefixer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { paths } = require('./common');

module.exports = {
  mode: 'development',
  output: {
    path: paths.DIST_DIR,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [AutoprefixerPlugin()],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '[Dev] App',
      template: path.resolve(paths.PUBLIC_DIR, 'index.html'),
    }),
    new DotenvPlugin({
      path: path.resolve(paths.CONFIGS_DIR, 'env/development.conf'),
    }),
    // This plugin is used instead of ts-loader, because
    // react-hot-loader works only with babel
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(paths.PROJECT_DIR, 'tsconfig.json'),
    }),
  ],
  devServer: {
    hot: true,
    contentBase: paths.DIST_DIR,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  stats: {
    modules: false,
  },
};
