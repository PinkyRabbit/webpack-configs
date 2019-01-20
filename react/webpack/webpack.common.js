const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js', // change here
    path: path.resolve(__dirname, '../../../public/js')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
