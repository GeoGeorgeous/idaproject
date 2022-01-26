const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
    compress: true, 
    port: 8080, 
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        // Babel
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // шрифты и SVG
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        // изображения
        test: /\.(png|jpg|gif|)$/,
        type: 'asset/resource'
      },
      {
        // стили
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ] 
};