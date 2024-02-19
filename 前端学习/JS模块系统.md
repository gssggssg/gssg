# JS模块化系统
随着 JavaScript 开发变得越来越广泛，命名空间和依赖关系变得越来越难以处理。人们已经开发出不同的解决方案以模块系统的形式来解决这个问题。

## CommonJS(CJS)

CommonJS 是一种同步加载模块的规范，主要用于服务器端的 Node.js 环境。

```javascript
// 模块导出
module.exports = {
  // 模块内容
};

// 模块导入
const module = require('module');
```

> **top：CommonJS** 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。

## AMD（Asynchronous Module Definition）

**AMD** 是一种_异步_加载模块的规范，主要用于浏览器端的 JavaScript 开发。它允许模块在加载完成后立即执行，而不会阻塞页面加载。

```javascript
// 模块定义
define(['dependency1', 'dependency2'], function (dependency1, dependency2) {
  // 模块内容
  return {
    // 模块导出内容
  };
});

// 模块加载
require(['module'], function (module) {
  // 模块加载完成后执行的逻辑
});
```

## UMD（Universal Module Definition）

**UMD** 是一种通用的模块定义格式，旨在兼容 **CommonJS**、**AMD** 以及全局变量导出的方式。

实现原理为：先判断是否支持**node.js**的模块，存在就使用**node.js**；再判断是否支持**AMD**（**define**是否存在），存在则使用*
*AMD**的方式加载。这就是所谓的**UMD**。

```javascript
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  } else if (typeof exports === 'object' && typeof module === 'object') {
    // CommonJS
    factory(exports, module);
  } else {
    // 浏览器环境下暴露到全局变量
    factory((root.myModule = {}), root.myModule);
  }
})(this, function (exports, module) {
  // 模块内容
});
```

> **UMD** 实质上创建了一种使用两者之一的方法，同时还支持全局变量定义。因此，**UMD** 模块能够在客户端和服务器上工作。

## ESM（ES Module）

**ESM** 是 **ECMAScript** 官方提供的模块标准，支持异步加载，具有静态导入和导出，使得代码更具可靠性和可预测性。

```javascript
// 模块导出
export const module = {
  // 模块内容
};

// 模块导入
import {module} from 'module';
```

## 概括

不同的模块规范各有优劣，选择合适的规范取决于项目的需求和目标平台。

- CJS 为同步加载，主要用于服务器端编程，因为在服务器端加载速度不太重要，而且同步加载更容易理解和管理。
- AMD 为异步加载，适用于浏览器环境中的异步模块加载，尤其是在 Web 应用中采用模块化开发时使用。
- UMD 为通用形，通常用作 ESM 不起作用时的后备方案，适用于同时在浏览器和 Node.js 环境中使用的代码，使得代码具有更大的通用性。
- ESM 适用于现代浏览器以及支持 ES6 模块的 Node.js 版本，使得代码更具可维护性和可移植性。

