var webpack = require('webpack');
var path = require('path');
//var pathToSassLoader = path.resolve(__dirname, '../../index.js');
console.log("PATH" + path.join(__dirname, 'src'));
module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
    /*{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!' + pathToSassLoader
    },*/
    {
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],  //loader: 'babel'
      include: path.join(__dirname, 'src'),
    }, 
    { 
      loaders: ['react-hot'],
      include: path.join(__dirname, 'style'),
    },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./style")]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
