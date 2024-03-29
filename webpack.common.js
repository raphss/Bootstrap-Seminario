const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  entry: {
    index: './src/index.js',
    home: './src/home.js',
    about: './src/about.js',
    contact: './src/contact.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Seminário Bootstrap',
      favicon: './src/images/icon.ico',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: './src/home.html',
      title: 'Página Inicial',
      favicon: './src/images/icon.ico',
      filename: 'home.html',
      chunks: ['home'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      title: 'Sobre o projeto',
      favicon: './src/images/icon.ico',
      filename: 'about.html',
      chunks: ['about'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      title: 'Contato',
      favicon: './src/images/icon.ico',
      filename: 'contact.html',
      chunks: ['contact'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  optimization: {
    runtimeChunk: 'single',
  },
};
