# 前言
数组方法有太多了，本文记录一些本人容易记错的一些数组方法，用于巩固及复习。
后续会慢慢的将其他数组方法添加进来。
善用数组方法可以使数据处理变的优雅且简单。
那下面让我们开始吧:

# filter()
## 描述：
**filter() 方法创建一个新数组，并将符合条件的所有元素添加到创建的新数组中。**
## 语法：
```javascript
Array.filter(callback(element, index, array) { // 函数体 }, thisValue)
```
## 参数：
**callback与thisValue**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 用来测试数组的每个元素的**函数**。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接收三个参数。 |
| 参数二 | thisValue | 可选 | 执行 callback 时，用于 this 的值。<br />对象作为该执行回调时使用，传递给函数。<br />如果省略了 thisValue ，"this" 的值为 "undefined" |

1. **callback的参数列表**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | element | 必选 | 当前元素 |
| 参数二 | index | 可选 | 当前元素的索引值 |
| 参数三 | array | 可选 | 调用了 filter 的数组本身 |

2. **thisValue的参数**

执行 callback 时，用于 this 的值。
## 返回值：
是一个由 filter() 参数一函数的返回值组成的新数组
## 示例：
```javascript
let users = [
  {id: 11, name: "孙悟空"},
  {id: 21, name: "猪八戒"},
  {id: 31, name: "沙和尚"}
];

// 返回前两个用户的数组
let filterUsers = users.filter(item => item.id < 31);

console.log(filterUsers.length); // 2
```

# map()
## 描述：
**map() 方法创建一个新数组，新数组的每个元素是调用一次给定函数的返回值。**
## 语法：
```javascript
Array.map(callback(currentValue, index, array) { // 函数体 }, thisValue)
```
## 参数：
**callback与thisValue**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 数组中的每个元素都要运行的**回调函数**。它接收三个参数。 |
| 参数二 | thisValue | 可选 | 执行 callback 时，用于 this 的值。<br />对象作为该执行回调时使用，传递给函数。<br />如果省略了 thisValue ，"this" 的值为 "undefined" |

1. **callback的参数列表**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | element | 必选 | 当前元素 |
| 参数二 | index | 可选 | 当前元素的索引值 |
| 参数三 | array | 可选 | 调用了 filter 的数组本身 |

2. **thisValue的参数**

执行 callback 时，用于 this 的值。
## 返回值：
是一个由原数组每个元素执行回调函数的结果组成的新数组。
## 示例：
```javascript
let number = [1, 2, 3].map(item => item + 1);

console.log(lengths); // 2, 3, 4
```

# sort()
## 描述：
**map() 方法在原数组上进行修改更改元素的顺序**<br />_**注：** 默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时_
## 语法：
```javascript
Array.sort( compareFunction )
```
## 参数：
**compareFunction**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | **compareFunction** | 可选 | 规定排列顺序的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。 |

1. **compareFunction的参数列表**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | firstEl | 必选 | 第一个用于比较的元素。 |
| 参数二 | secondEl | 必选 | 第二个用于比较的元素。 |

**compareFunction返回值**<br />返回一个说明这两个值顺序的数字

- 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
- 若 a 等于 b，则返回 0。
- 若 a 大于 b，则返回一个大于 0 的值。
## 返回值：
返回值为排序后的数组，但是返回值通常会被忽略，因为修改了原数组。
## 示例：
```javascript
let number = [1, 2, 3].map(item => item + 1);

console.log(lengths); // 2, 3, 4
```

# reduce()
## 描述：
**reduce() 方法为数组中的每一个元素依次执行(升序执行)回调函数，不包括数组中被删除或从未被赋值的元素。将其结果计算为一个值。**<br />_**注：** reduce() 可以作为一个高阶函数，用于函数的 compose。_
## 语法：
```javascript
Array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```
## 参数：
**callback与initialValue**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 执行数组中每个数组元素的函数 (如果没有initialValue初始值那么第一个值不会执行改函数)它接收四个参数。 |
| 参数二 | initialValue | 可选 | callback函数的初始值 |

1. **callback的参数列表**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | accumulator | 必选 | 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue。 |
| 参数二 | currentValue | 必选 | 当前元素 |
| 参数三 | index | 可选 | 当前元素的索引值 |
| 参数四 | array | 可选 | 调用了 reduce() 的数组本身 |

2. **initialValue的参数**

作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素作为初始值。 在没有初始值的空数组上调用 reduce 将报错。
## 返回值：
函数累计处理后的结果<br />执行完所有**callback**函数的accumulator参数<br />_**注：** 您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。_
## 示例：
```javascript
let number = [1, 2, 3, 4];

let result = number.reduce((sum, current) => sum + current, 0);

console.log(result); // 10
```

# forEach()
## 描述：
**reduce() 方法为数组中的每一个元素依次执行(升序执行)回调函数，不包括数组中被删除或从未被赋值的元素。将其结果计算为一个值。**<br />_**注：** reduce() 可以作为一个高阶函数，用于函数的 compose。_
## 语法：
```javascript
Array.forEach(callback(currentValue , index , array), thisValue)
```
## 参数：
**callback与thisValue**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 执行数组中每个数组元素的函数，它接收三个参数。 |
| 参数二 | thisValue | 可选 | 执行 callback 时，用于 this 的值。<br />对象作为该执行回调时使用，传递给函数。<br />如果省略了 thisValue ，"this" 的值为 "undefined" |

1. **callback的参数列表**

| ​ | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | currentValue | 必选 | 当前元素 |
| 参数二 | index | 可选 | 当前元素的索引值 |
| 参数三 | array | 可选 | 调用了 forEach() 的数组本身 |

2. **thisValue的参数**

执行 callback 时，用于 this 的值。
## 返回值：
该方法没有返回值。
## 示例：
```javascript
let number = [1, 2, 3, 4];

number.forEach((item, index ,array) =>{
	console.log(item); // 1/2/3/4
});
```

# 方法列表
方法属性：

| 方法 | 改变原数组 | 返回值描述 | 描述 |
| --- | --- | --- | --- |
| filter() | 否 | 过滤后的新数组 | 过滤器 |
| map() | 否 | 循环后的新数组 | 循环 |
| sort() | 是 | 为排序后的数组 | 排序 |
| reduce() | 否 | 为函数累计处理后的结果 | 累加器 |
| forEach() | 是 | 没有返回值为undefined | 循环 |



**本文参考：**

_MDN中文官网_[_https://developer.mozilla.org/zh-CN/_](https://developer.mozilla.org/zh-CN/)  
_W3School 简体中文版_[_https://www.w3school.com.cn/_](https://www.w3school.com.cn/index.html)
