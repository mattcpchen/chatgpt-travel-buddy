const path = require('path');
const nodeExternals = require('webpack-node-externals')


module.exports = {
  entry: "./server/index.js",
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  optimization: {
    nodeEnv: false,
  },
};