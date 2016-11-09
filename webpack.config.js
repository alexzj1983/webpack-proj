var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: ['./asset/main'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    })
  ],
  module: {
    loaders: [{
      test:/\.json$/,
      loader:'json'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?name=./static/img/[hash:8].[name].[ext]'
        // 'file?hash=sha512&digest=hex&name=[hash].[ext]',
        // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        
      
    }]
  }
}