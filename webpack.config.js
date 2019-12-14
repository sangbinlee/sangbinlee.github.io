// const path = require('path');
  
const webpack = require('webpack');

module.exports = {
  entry: {
    app:      './main.js',
  } ,
//   entry: './main.js',
//   entry: './src/index.js',
  output: {
      
    path: __dirname,
    // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};