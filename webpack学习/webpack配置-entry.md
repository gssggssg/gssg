# webpack 配置-entry

## 描述

`entry`在**webpack**官网的描述；

> 入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。

简单来说：`entry`可以**指定从哪个模块作为 webpack 打包的起点**，从这个模块对整个项目的依赖进行递归解析；

## 配置

### 类型

```
string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })
```

### 示例

| 类型                                                                              | 示例                                                         | chunk 个数            | chunk 名           |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------- | ------------------ |
| **string**                                                                        | `entry: "./src/index.js",`                                   | 一个                  | **main**           |
| **[string]**                                                                      | `entry: ["./src/index.js", "./src/index.html"],`             | 一个                  | **main**           |
| **object { \<key>: string \| [string] }**                                         | `entry: {  index: "./src/index.js", home: "./src/home.js",}` | 几个入口几个**chunk** | `key`值            |
| **(function: () => string \| [string] \| object { \<key>: string \| [string] })** | `entry: () => './index',`                                    | 根据函数返回值类型    | 根据函数返回值类型 |

### 场景

#### 单入口

用于配置**单页面应用(SPA)**；
打包形成一个 **chunk**，**chunk**的名称为**main**，输出一个 bundle 文件；

```js
// 将 ./src/index.js 设为入口文件
entry: "./src/index.js",
```

#### 多入口

- 所有入口文件最终只会形成一个**chunk**，输出一个 bundle 文件；

  ```js
  // ./src/index.js 与 ./src/home.js 都做为入口文件
  entry: ["./src/index.js", "./src/home.js"],
  ```

- 有几个入口文件，就形成几个**chunk**，用于配置**多页面应用(MPA)**；

  ```js
  // index与home都做为入口文件
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
  }
  ```

#### 动态入口

将`entry`设置成一个函数,可以动态的返回上述的配置，
函数返回值类型为 `string `、`[string]`、`object`，对应上文`entry`配置；

> 这个函数将在每个 make 事件中被调；

```js
// 同步函数
entry: () => './index',

// 异步函数
    entry
:
() => new Promise((resolve) => resolve(['./index', './home'])),
```
