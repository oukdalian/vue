const uglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin")
const baseconfig = require("./base.config")
const webpackMerge = require("webpack-merge")

module.exports = webpackMerge(
  baseconfig, {
    plugins: [
      new uglifyJsWebpackPlugin()
    ]
  }
)