const path = require('path');

module.exports = {
  entry: './src/scripts/eventos.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'eventos.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
