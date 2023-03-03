# webpack——entry 的配置

## 描述

`entry`在**webpack**官网的描述的描述；

> 入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。

简单来说：`entry`配置可以**指定从哪个模块作为分析树的起点**；

## 配置

### 类型

```ts
string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })
```

- **string**

- **[string]**

- **object { \<key>: string | [string] }**

- **(function: () => string | [string] | object { \<key>: string | [string] })**

### 示例

#### 单入口

> 单页应用(SPA)

打包形成一个 **chunk**，**chunk**的名称为**main**，输出一个 bundle 文件；

```js
entry: "./src/index.js",
```

#### 多入口

- 所有入口文件最终只会形成一个**chunk**，**chunk**的名称为**main**，输出一个 bundle 文件；

  ```js
  entry: ["./src/index.js", "./src/index.html"],
  ```

- 有几个入口文件，就形成几个**chunk**，输出几个 bundle 文件，每一个**chunk**的名称为对象的`key`；

  ```js
  entry: {
    home: "./src/home.js",
    about: "./src/about.js",
    contact: "./src/contact.js"
  }
  ```
