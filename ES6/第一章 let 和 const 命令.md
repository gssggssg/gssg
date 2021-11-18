# 第一章 let 和 const 命令

# 前言：
最近开始看**阮一峰老师的《ECMAScript 6 入门》**(以下简称原文)学习ECMAScript 6(下文简称ES6)的知识，整理出一些知识点加上我的理解来做成文章笔记。按照章节为单位一个章节一篇笔记。
文章代码与目录结构和原文不同。

这一章原文链接 [let 和 const 命令 ](https://es6.ruanyifeng.com/#docs/let)。


# let 
​
`let` 是用来声明一个**变量**。
不同与`var`会存在变量提升(下文有介绍)，`let`所声明的变量值只在`let`命令所在的代码块内有效。
同一个作用域(下文有介绍)不可使用 `let` 重复声明同一个变量。
​
**注意**：

- 声明变量
- 没有变量提升
- 不可重复声明
- 只在`let`命令所在代码块有效

​
```javascript
let sample = 1;
sample = 2;
let sample = 2; // 将会报错
```
```javascript
{
  let sample = 1;
  console.log(sample); // 正常输出 1
}

console.log(sample); // 将会报错，因为只在let命令所在代码块有效
```

# const
​
`const` 是用来声明一个**只读常量**。
一旦声明，常量的值就不能改变。如果试着改变常量的值会报错。
并且`const` 在声明的时候就必须对其赋值，只声明不赋值，也会报错。
同一个作用域不可使用 `const` 重复声明同一个常量。
`const` 与`let`一样，都因为作用域原因，只能在所在代码块中有效。
​
> const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

**注意**：

- 声明常量
- 声明后不可以改变
- 声明的时候必须对其赋值
- 不可重复声明
- 在`const`命令所在代码块有效

```javascript
const sample = 1;
sample = 2; // 将会报错，const 声明的变量不可以重新赋值
```
```javascript
const sample; // 直接报错，const 声明的时候必须对其赋值
```

# let 与 const

引入`let`后，已经可以代替`var`了，在`let`与`const`之中能用`const`就尽量用`const`。
​
## let 与 const 不同处
​
`let` 与 `const` 的区别就是一个声明变量一个声明常量，变量可以重新赋值，常量不能重新赋值。
​
```javascript
let sampleLet = 2;
const sampleConst = 1;

sampleLet = 3; // 正常
sampleConst = 3; // 报错 
```
​
## let 与 const 相同处
​
- 都只能先声明后使用，不能变量提升。
- 都不可以在同一个作用域中重复声明
- 都只在命令所在代码块有效

```javascript
{
sampleLet; // 报错
sampleConst; // 报错
  
let sampleLet = 2;
const sampleConst = 1;
  
let sampleLet = 3; // 报错
const sampleConst = 3; // 报错
}

sampleLet; // 报错
sampleConst; // 报错 
```
​

# 变量提升(Hoisting)
​
在ES6之前，使用`var`声明变量时会产生一种叫做变量提升的特性。
无论是在代码的哪个地方声明的，都会提升到当前作用域的最顶部，这种行为叫做变量提升。
为了纠正这种现象，`let` 命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错
​
> 上文`let`与`const`表示变量不能提升，真的是这样吗？
> 其实在 JavaScript 中，所有表示`var, let, const, function, function*, class`的声明都会被提升。
> `let`与`const`声明变量会在环境实例化时被创建，但是在变量的词法绑定之前不允许以任何方式对其进行访问，也就是说，当你在声明前调用变量将会报错但是报错信息不是未定义而是无法在初始化之前访问。这里也就引出了下一个概念，叫做**暂时性死区**。

```javascript
// var 声明会变量提升，不会报错，但是值为 undefined
console.log(sampleVar); // undefined
var sampleVar = 1;

// let 声明不会变量提升，但是报错不是 not defined
console.log(sampleLet); // Cannot access 'sampleLet' before initialization
let sampleLet = 1;

// const 声明不会变量提升，但是报错不是 not defined
console.log(sampleConst); // Cannot access 'sampleConst' before initialization
const sampleConst = 1;

// 直接使用没有声明的变量报错为 ” is not defined “
console.log(sample); //sample is not defined
```
​

# 暂时性死区
​
ES6 规定，如果代码区块中存在 `let` 和 `const` 命令声明的变量，这个区块对这些变量从一开始就形成了封闭作用域，凡是在声明之前就使用这些变量，就会报错。直到声明语句完成，这些变量才能被访问（获取或设置），
这在语法上称为“**暂时性死区**”（英temporal dead zone，简 TDZ），即代码块开始到变量声明语句完成之间的区域。

```javascript
var sample = 1;
if (true) {
  sample = '1';  // 报错
  let sample;
}
```
​
简单来说，就是`let` 和 `const` 命令声明的变量，在进入这个声明代码所在的作用域时，就已经存在，但是不可以获取或使用，直到声明语句完成，才可以访问。


# 块级作用域
​
作用域（scope，或译有效范围）就是变量和函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期。
​
## let与const 块级作用域
​
作用域并不是ES6的新东西，但是在ES5只有全局作用域和函数作用域，为了解决块级作用域，**ES6可以使用**`**let**`**与**`**const**`**声明一个块级作用域的变量。**​
`var` 声明的变量具有变量提升特性，所以没有块的概念，可以跨块访问，但不能跨函数。
**外层作用域无法读取内层作用域的变量。**

```javascript
{ // 块作用域
  var sampleVar = 1;
  let sampleLet = 2;
  const sampleConst = 3;
  console.log(sampleVar); // 成功输出 1
  console.log(sampleLet); // 成功输出 2
  console.log(sampleConst); // 成功输出 3
}
console.log(sampleVar); // 成功输出 1
console.log(sampleLet); // 报错  not defined
console.log(sampleConst); // 报错  not defined
```
​
**ES6 允许块级作用域的任意嵌套。**
同一个作用域不可使用`let`或`const`声明同一个变量，**内层作用域可以定义外层作用域的同名变量。**

```javascript
{
  {
    {
      let sample = 'Hello World'; // 外层作用域
      { let sample = 'sample'; } // 不报错
      { console.log(sample); }  // 正常输出 ‘Hello World’
    }
  }
}
```
​
## 块级作用域与函数声明
​
**ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。**
**ES6 规定，块级作用域之中，函数声明语句的行为类似于**`**let**`**，在块级作用域之外不可引用。**


```javascript
/* 
	ES5，这两种情况都是不合法的，因为这两个函数声明都是在块作用域中声明。
  但应为浏览器为了兼容以前的旧代码，还是支持在块级作用域之中声明函数。所以不会报错
*/ 

if (true) {
  function sampleFn() {}
}

try {
  function sampleFn() {}
} catch(e) {
  // ...
}
```
```javascript
/* 
	ES6，函数声明语句的行为类似于let，在块级作用域之外不可引用
*/ 

if (true) {
  sampleFn();  // 正常输出，函数声明语句的行为类似于let
  function sampleFn() {
    console.log('Hello World');
  }
}

// 但其实在块级作用域之外也可以引用函数，只不过值为undefined

if (false) {
  function sampleFn() { console.log('Hello World'); }
}
console.log(sampleFn); // 正常输出 undefined
sampleFn(); // 报错为sampleFdddn is not defined 
```

**为什么块级作用域之外也可以引用函数呢？**
如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，ES6 在附录 B里面规定，**浏览器的实现可以不遵守上面的规定**(指函数声明语句的行为)，有自己的行为方式。

- **允许在块级作用域内声明函数。**
- **函数声明类似于**`**var**`**，即会提升到全局作用域或函数作用域的头部。**
- **同时，函数声明还会提升到所在的块级作用域的头部。**

**注意**，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作`let`处理。
​
我们应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
​
```javascript
// 函数声明语句，不要在块作用域中使用，因为会有变量提升
{
  function sampleFn() {
    console.log("Hello World");
  }
}

// 函数表达式，在块作用域中，函数不会有变量提升
{ 
  const sampleFn = function () {
    console.log("Hello World");
  }
}
```

# 顶层对象
​
顶层对象，在浏览器环境指的是`window`对象。
**ES5 之中，顶层对象的属性与全局变量是等价的。**
ES6 为了改变这一点，
一方面规定，为了保持兼容性，`var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；
另一方面规定，`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。
​
```javascript
/*
	ES5 之中，顶层对象的属性赋值与全局变量的赋值，是同一件事。
*/

window.sample = 1;
console.log(window.sample); // 正常输出 1
sample = 2;
console.log(window.sample);// 正常输出 2

/*
	ES6 之中，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
*/

var sampleVar = 1;
console.log(window.sampleVar)  // 正常输出 1
let sampleLet = 1;
console.log(window.sampleLet) // 正常输出 undefined
let sampleConst = 1;
console.log(window.sampleConst) // 正常输出 undefined
```
​
`window`提供全局环境（即全局作用域）所有代码都是在这个环境中运行。
​
函数里面的`this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。
不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。
​
```javascript
function sampleFn(){
  console.log(this);
}
sampleFn(); // 正常输出 输出全局对象 window

function sampleFn1(){
  "use strict";
  console.log(this)
}
sampleFn1(); // 正常输出 undefined

// 开启严格模式
"use strict";
const sample  = new Function('return this')();
console.log(sample); // 正常输出 输出全局对象 window
```