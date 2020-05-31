const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const uglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    // 为了在图片的url前面加上路径，最后发布时，index.html也会打包在dist里，所以这个路径设置要删掉
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是从右向左读
        use: ['style-loader', 'css-loader'],
      },
      {
        // 因为版本问题，less-loader安装时注意版本
        // npm install less-loader@4.1.0 less@3.9.0 --save-dev
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader模板进行加载。
              // 使用file-loader时，不需要设置rules。
              limit: 8192,
              // 大于limit时，file-loader进行加载时，也有效。
              // img路径
              // 变量[name]:打包前的文件名
              // 变量[hash:8]:哈希值8位：为了保证文件名的唯一性
              // 变量[ext]:打包前的扩展名
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        // npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      },
      {
        // npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归aaa所有"),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
  ]
}