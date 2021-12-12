const path = require("path");
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包文件后文件
        filename: "bundle.js",
    },
    // 指定webpack打包使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            // "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式"usage" 表示
                                        "useBuiltIns": "usage"
                                    }

                                ]
                            ]

                        }
                    },
                    'ts-loader',
                ],
                // 要排除的文件
                exclude: /node_modules/,
            },
            {
                // 设置less文件的处理
                test: /\.less$/,
                // 由下往上执行
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss 
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        // 设置浏览器
                                        {
                                            // 设置兼容什么浏览器
                                            browsers: "last 2 versions", // 兼容浏览器最新的两个版本
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new HtmlWebpackPlugin({ "template": "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],
    // 用来设置引用模块
    resolve: {
        // 设置什么文件可以作为模块
        extensions: ['.ts', '.js']
    },
    // 设置mode
    mode: 'development'
}