js的一些小知识


getElementById
getElementsByTagName

data的使用及方法

data.getHours() //获取 时
data.getMinutes()  //获取 分
data.getSeconds()  //获取 秒

定时器
//两个参数，第一个参数时执行函数(可以有多个函数)，第二个参数就是没循环一次的时间
setInterval(fun,time) 


JS获取DOM元素的方法（8种）

```js
通过ID获取（getElementById）
通过name属性（getElementsByName）
通过标签名（getElementsByTagName）
通过类名（getElementsByClassName）
通过选择器获取一个元素（querySelector）
通过选择器获取一组元素（querySelectorAll）
获取html的方法（document.documentElement）
document.documentElement是专门获取html这个标签的
获取body的方法（document.body）
document.body是专门获取body这个标签的。
```