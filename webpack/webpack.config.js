const { resolve } = require("path");
const HTMLWEBPACKPLUGIN = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

/**
 * 缓存
 *  babel缓存
 *    cacheDirectory: true
 *  文件资源缓存
 *    hash： 每次一webpack构建时都会生成唯一的一个hash的值
 *      问题：因为js与css同时使用一个hash值，通过重新打包，会导致所有缓存失效，有些还需要缓存的文件也会失效
 *    chunkhash：根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就一样
 *      问题：因为js与css得hash值还是一样，因为css是被引到js中得，所以他们属于一个chunk
 *    contenthash：根据文件的内容生成hash值，不同文件的hash值一定不一样
 */


/**
 * tree-shaking 树摇
 *  1. 必须使用ES6模块化
 *  2. 开启 production 环境
 * 
 * 在 packge.json 配置 
 *  "sideEffects": false 所有代码都可以进行 tree-shaking
 *    问题： 可能会把 css/@babel/polyfill(副作用)文件干掉
 *  "sideEffects": ["*.css","*.less"]
 */

module.exports = {
  entry: ["./src/index.js", "./src/index.html"], // 将html文件加入entry中，解决 html文件更改热更新
  output: {
   /**
    * 文件缓存：将输出文件名加入[hash:10]，css一样
    * 解决问题：每次更新打包后的文件，由于每次wabpack打包hash值不同，所以每次文件更新，浏览器强制缓存将失效
    * 缺点：没有修改的文件，也将使强制缓存失效，
    */
    filename: "js/built.[hash:10].js",
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
              /**
               * babel：缓存，开启缓存，用于缓存没用被修改的文件
               * 例：一个文件被修改，再次打包只会打包那一个被修改的文件，其余没用被修改过的文件，直接读取缓存就可以。
               */
              cacheDirectory: true,
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
      filename: "css/built.[hash:10].css",
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
