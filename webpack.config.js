var path = require('path');

module.exports = {
  entry: './asset/js/index.js',
  output:{
    filename:'main.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  }
}