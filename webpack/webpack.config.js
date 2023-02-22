const { resolve } = require("path");
const HTMLWEBPACKPLUGIN = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  entry: ["./src/index.js", "./src/index.html"], // 将html文件加入entry中，解决 html文件更改热更新
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre", // 优先执行对象
        loader: require.resolve("eslint-loader"),
        options: { fix: true },
      },
      {
        /**
         * oneOf 中的loader 只会匹配一个
         * 注意：不能有两个配置处理一个文件
         */
        oneOf: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },

          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: { version: 3 },
                    targets: {
                      chrome: "70",
                      firefox: "50",
                      ie: "9",
                    },
                  },
                ],
              ],
            },
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              esModule: false,
              name: "[hash:10].[ext]",
              outputPath: "assets/images",
            },
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          {
            exclude: /\.(html|css|js|json|less|jpg|png|gif)$/,
            loader: "file-loader",
            options: {
              name: "[hash:10].[ext]",
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWEBPACKPLUGIN({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
    hot: true, // 开启 HMR 热更新功能
  },

  /**
   * source-map：由于运行的代码都是构建后的代码，不便于阅读调试，所以可以使用 source-map 来对源代码到构建后代码的映射（如果构建后代码出错了，通过映射可以追踪代码报错位置）
   * 开发环境：
   *  考虑的点，便于调试，定位到行与列
   *  cheap-module-source-map
   * 生产环境：
   *  考虑的点，隐藏源码，体积小
   *  source-map
   */
  devtool: "source-map",
};
