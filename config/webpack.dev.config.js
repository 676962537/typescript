
let webpack = require('webpack');
let webpackMerge = require("webpack-merge");
let base = require("./webpack.base.config");

module.exports = webpackMerge(base, {
  mode: "none",
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    host:'127.0.0.1',
    compress: true,
    // Disble host check
    port: 8000,
    disableHostCheck: true
    // quiet: true, // necessary for FriendlyErrorsPlugin
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  ]
});
