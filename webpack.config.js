var validate = require('webpack-validator');

var config = {

  entry: './src/app.js',

  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src/',
        loader: 'babel'
      }
    ]
  }
  
};

module.exports = validate(config);
