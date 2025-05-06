const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true, // cleans dist folder before each build
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};