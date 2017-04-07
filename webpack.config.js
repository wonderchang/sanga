const path = require('path')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sanga.js',
    library: 'Sanga',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
