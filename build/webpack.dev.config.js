let webpack = require('webpack');
let webpackMerge = require("webpack-merge");
let base = require("./webpack.base.config");
process.env.NODE_ENV = 'development';

module.exports = webpackMerge(base, {
  // 输出配置
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: "js/[name].[hash].js"
  },
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    // Disble host check
    port: 8080,
    disableHostCheck: true
    // quiet: true, // necessary for FriendlyErrorsPlugin
  },
  optimization:{
    splitChunks:{
      minChunks: 2,
      cacheGroups:{
        default:{
          minChunks: 2,
          priority:  20, // 优先级
          reuseExistingChunk: true,
          minSize: 0,
          name:"default"
        }
      }
    }
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          // 使用style-loader和css-loader将其加载到js中
          use: [ 'style-loader', 'css-loader' ]
      }
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   }),
      //   use: [
      //       {
      //           loader: miniCssExtractPlugin.loader,
      //           options: {
      //               // you can specify a publicPath here
      //               // by default it uses publicPath in webpackOptions.output
      //               publicPath: '../',
      //               // hmr: process.env.NODE_ENV === 'development',
      //               // only enable hot in development
      //               hmr: process.env.NODE_ENV === 'development',
      //               // if hmr does not work, this is a forceful method.
      //               reloadAll: true,
      //           },
      //       },
      //       'css-loader',
      //   ],
      // }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin() // HMR shows correct file names in console on update.
  ]
});
