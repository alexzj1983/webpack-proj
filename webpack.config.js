var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main:'./asset/js/index.js'
    ,
    vendor:['moment','lodash']
    
  },
  output:{
    // filename:'[name].[chunkhash].js',
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:ExtractTextPlugin.extract({
        use:'css-loader'
      })
    }]
  },
  plugins:[
    // new ExtractTextPlugin('[name].[chunkhash].css'),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    })
  ]
}