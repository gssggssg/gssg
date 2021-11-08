# 简单介绍
在JavaScript中定时器有两个 `setInterval()` 与 `setTimeout()` 分别还有取消定时器的方法。
这都是`window`的对象，调用时可以省略`window`。这两个方法并不在 JavaScript 的规范中。
定时器方法相关方法有四种。

| **方法** | **描述** |
| --- | --- |
| setInterval | 周期性地调用一个函数(function)或者执行一段代码。 |
| clearInterval | 取消掉用setInterval设置的重复执行动作。 |
| setTimeout | 在指定的延迟时间之后调用一个函数或者执行一个代码片段。 |
| clearTimeout | 方法可取消由 setTimeout() 方法设置的 timeout。 |

`setTimeout()` 与`setInterval()`的区别是它们的执行次数不同。
​

⚠️`setTimeout()` 只执行一次`setInterval()`是每间隔给定的时间周期性执行。
​

# setInterval
## 描述
`setInterval()` 方法可以按照制定的周期，来重复调用一个函数或执行一个代码段。周期单位为毫秒。
`setInterval()` 方法如果没有`被 clearInterval()` 方法关闭或页面关闭，那么会一直调用下去。
怎么用呢？
setInterval的参数有多个。
第一种，如果第一个参数为代码段，那么`setInterval()`方法可以选填。
第二种，如果第一个参数为函数，那么`setInterval()`方法可以有多个参数。
```javascript
let timerId = setInterval(func|code, delay, arg1, arg2, ...)
```
## 参数
| 参数 | 必/选填 | 描述 |
| --- | --- | --- |
| func | code | 必填 | 调用的函数后要执行的函数或代码字符串 |
| delay | 必填 | 执行代码前所需的时间，单位为毫秒，可以不填，默认值是 0 |
| arg1，arg2… | 选填 | 要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持） |

⚠️参数`func|code` 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。
## 返回值
返回值`timeoutID`是一个正整数，表示定时器的编号。这个值可以传递给`clearTimeout()`来取消该定时器。
## 用法
这是一个点击按钮，每隔一秒种，数字加一的示例；
```html
<p id="showNum"></p>
<button onclick="timer()">点我每秒钟数字加一</button>

<script>
  const showNum = document.getElementById("showNum");

  let timerId; // 计时器的ID
  let num = 0;

  function timer() {
    timerId = setInterval(addNum, 1000);
  }

  function addNum() {
    showNum.innerText = `${num++}`;
  }

  // 没有写停止计时器代码
</script>
```
# setTimeout
## 描述
`setTimeout()`返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。
`setTimeout()`允许我们将函数推迟到一段时间间隔之后再执行。
```javascript
let timerId = setTimeout(func|code, delay, arg1, arg2, ...)
```
## 参数
`setTimeout()`参数这里和`setInterval()`的参数是一样的。

| 参数 | 必/选填 | 描述 |
| --- | --- | --- |
| func | code | 必填 | 调用的函数后要执行的函数或代码字符串 |
| delay | 必填 | 执行代码前所需的时间，单位为毫秒，可以不填，默认值是 0 |
| arg1，arg2… | 选填 | 要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持） |

⚠️参数`func|code` 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。
​

## 用法:
`setTimeout()`用法和 `setInterval()`是一样的，
不过 `setTimeout()` 只执行一次不同，`setInterval()` 是根据指定的时间周期性执行。
```html
<p id="showNum"></p>
<button onclick="timer()">点击后，等待一秒钟数字加一</button>

<script>
  const showNum = document.getElementById("showNum");

  let timerId;
  let num = 0;
  addNum();

  function timer() {
    timerId = setTimeout(addNum, 1000);
  }

  function addNum() {
    showNum.innerText = `${num++}`;
  }

</script>
```
​

# 取消timer
clearInterval() 方法可取消由 setInterval() 设置的 timer。
clearTimeout() 方法可取消由 setTimeout() 设置的 timer。
​

使用方法很简单,只有一个参数，该参数timeoutID为您要取消定时器的标识符。
该ID由相应的setTimeout()或clearTimeout()调用返回.
```javascript
clearInterval(intervalID);
clearTimeout(timeoutID);
```
> ⚠️ 注意的是`setTimeout()`和`setInterval()`共用一个编号池，技术上，clearTimeout()和 clearInterval() 可以互换。但是，为了避免混淆，不要混用取消定时函数。

用法很简单
```javascript

function timer() {
  timerId = setTimeout(addNum, 1000);
}

clearTimeout(timerId); // 当代码运行到这行的时候，会取消timer所设置的定时器。
```
# 在控制台使用定时器
在浏览器控制台中也可以使用定时器
## console.time(timerName)
创建一个名为name的计时器，并开始计时。
> ⚠️ 每一个计时器必须拥有唯一的名字，页面中最多能同时运行10,000个计时器。

## console.timeEnd(timerName)
调用console.timeEnd(name)停止计时器并输出所耗时间（毫秒）。
```javascript
console.time(timerName);
console.timeEnd(timerName);
```
## 用法
for循环99999次要多少时间示例.
```javascript
console.time(name);

let num;
for (let index = 0; index < 99999; index++) {
  num++;
}

console.timeEnd(name);
```