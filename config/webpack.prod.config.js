let webpack = require('webpack');
let webpackMerge = require("webpack-merge");
let base = require("./webpack.base.config");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = webpackMerge(base, {
  mode: "none",
  // plugins:[
  //     new UglifyJSPlugin({
  //
  //     })
  // ],
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
});
