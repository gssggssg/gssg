# webpack 配置-output

## 描述

配置 **webpack** 输出 **bundles** 文件位置与方式

> 只有一个 output 配置

## 配置

本文只列出`output` 一些常用配置，更多配置请查阅官方文档

### output.filename

#### 描述

输出文件名称（指定名称与目录）

#### 示例

```js
output: {
  filename: "js/bundle.js";
}
```

### output.path

#### 描述

输出文件目录的路径

#### 示例

```js
output: {
  path: path.resolve(__dirname, "build");
}
```

### output.publicPath

#### 描述

所有引入资源的前缀

#### 示例

```js
output: {
  publicPath: "/";
}
```

### output.chunkFilename

#### 描述

非入口 **chunk** 文件的名称。

#### 示例

```js
output: {
  chunkFilename: "[name]_chunk.js";
}
```

### output.library

#### 描述

用于打包的 **library** 向外暴露，用于

#### 示例
```js
output: {
  library: "[name]";
}
```

### output.libraryTarget

#### 描述

为了让`output.library`暴露的  **library** 和其他环境兼容，`libraryTarget` 控制以不同形式暴露 `library`

#### 示例

```js
output: {
  // browser 变量名添加到 window
  libraryTarget: "window";
  // node 变量名添加到 global
  libraryTarget: "global";
  // 通过 commonjs 方式映入变量
  libraryTarget: "commonjs";
}
```
