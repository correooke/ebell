var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

//var pathToSassLoader = path.resolve(__dirname, '../../index.js');
console.log("PATH" + path.join(__dirname, 'src'));
module.exports = {
  devtool: 'source-map',
  //devtool: 'cheap-module-eval-source-map',
  //devtool: 'eval',
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:8080/', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://0.0.0.0:8080' }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    },
    {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
    }, 
    { 
        test: /\.css$/, loader: 'style-loader!css-loader',
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
