let webpack = require('webpack');
let webpackMerge = require("webpack-merge");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let base = require("./webpack.base.config");
let path = require('path');
module.exports = webpackMerge(base, {
  // 输出配置
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: "js/[name].[hash].js"
  },
  // mode: "development",
  mode: "none",
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    // Disble host check
    host:'127.0.0.1',
    port: 8081,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
    // quiet: true, // necessary for FriendlyErrorsPlugin
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        // 详细配置的优先级 比较高 相对比公用配置
        // 自定义vendor会将代码内部动态引入的所有第三方模块都打包进vendor而不生成独立的chunk
        vendor: {
          name:'vendor',
          minChunks: 1,
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          priority:  10 // 优先级
        },
        //
        // 提取公共代码（非node_modules下），范围可以是所有主chunk和异步chunk
        common: {
          // minChunks数与按需加载有冲突，按需加载就是引入了一次，
          // minChunks设置1的时候，按需加载的模块不会单独生成chunk了而是会被打包进common
          name: "common",
          test: /[\\/]src[\\/]/,
          chunks: "all",
          // 最小的chunk引用数,大于才会被抽离 3
          minChunks: 2,
          // 为了测试common打包，设置成0表示大于0的chunk就可以被创建，默认30000
          minSize: 0,
          priority: 20, // 优先级
          // reuseExistingChunk: true
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:path.resolve('public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin() // HMR shows correct file names in console on update.
  ]
});
