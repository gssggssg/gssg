写在前面：续接上篇 [JavaScript 数组 常用方法]( ) <br />数组常用方法第二弹来了；
# some && every
### 描述：
`every`()与`some`()方法都是JS中数组的迭代方法。

- `some`方法对数组中每个元素调用被提供的函数，如果有**任何一个**元素结果为 `true` 则返回 `true` 否则返回`false`。
- `every`方法对数组中每个元素调用被提供的函数，如果**所有**元素结果为 `true` 则返回 `true` 否则返回`false`。

​<br />
> - `some`一直在找符合条件的值，一旦找到，则不会继续迭代下去。
> - `every`从迭代开始，一旦有一个不符合条件，则不会继续迭代下去。

_注意：如果用一个空数组对两个方法进行测试：_

- `_some_`_在任何情况下它返回的都是_`_false_`_。_
- `_every_`_在任何情况下它返回的都是_`_true_`_。_
### 语法：
两个方法的语法是一样的，只是返回的结果不同。
```javascript
Array.some(callback(element, index, array), thisValue)
Array.every(callback(element, index, array), thisValue)
```
### 参数：
两个函数的参数是一样的。<br />**callback与thisValue**

| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 用来测试数组的每个元素的**函数**。 |
| 参数二 | thisValue | 可选 | 执行 callback 时，用于 this 的值。<br />对象作为该执行回调时使用，传递给函数。<br />如果省略了 thisValue ，"this" 的值为 "undefined" |

1. **callback的参数列表**
| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | element | 必选 | 当前元素 |
| 参数二 | index | 可选 | 当前元素的索引值 |
| 参数三 | array | 可选 | 调用了 `some && every` 的数组本身 |

2. **thisValue的参数**

可选。要传递给函数以用作其 "this" 值的值。<br />如果此参数为空，则值 "undefined" 将作为其 "this" 值传递。
### 返回值：
返回值为布尔(Boolean)值，

- `_some_`如果有**任何一个**元素结果为 `true` 则返回 `true` 否则返回`false`。
- `_every_`如果**所有**元素结果为 `true` 则返回 `true` 否则返回`false`。
### 示例:
```javascript
const Array = [
  { name: "孙悟空", age: 3 },
  { name: "猪八戒", age: 4 },
  { name: "沙和尚", age: 5 },
];

// 检查数组中是否有人 age 为 4
let some = Array.some(  
  (item) => {
    return item.age === 4;
  }
);

// 检查数组中是否所有人 age 为 4
let every = Array.every( 
  (item) => {
    return item.age === 4;
  }
);
console.log(some); // true
console.log(every); // false
```
### 细节:
`some && every` 遍历的元素范围在第一次调用 callback 之前就已确定了。
> 在调用 `some && every` 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是`some && every` 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

# find && findIndex
### 描述：
`find`()与`findIndex`()方法都是JS中数组用来查找目标元素的方法。

- `find()`方法对数组中每个元素调用被提供的函数，如果满足该函数，就返回满足该函数的第一个元素的值，否则返回`undefined`。
- `findIndex()`方法对数组中每个元素调用被提供的函数，如果满足该函数，就返回满足该函数的第一个元素的索引值，否则返回`-1`。

简单来说：

- `find()`方法用来查找目标元素，找到就返回该元素，找不到返回`undefined`。
- `findIndex()`方法查找目标元素，找到就返回元素的位置，找不到就返回`-1`。

​

_这两个方法区别在于返回值，一个返回数组中找到的元素的值，一个返回数组中找到的元素的索引。_
### 语法：
两个方法的语法是一样的，只是返回的结果不同。
```javascript
Array.find(callback(element, index, array), thisValue)
Array.findIndex(callback(element, index, array), thisValue)
```
### 参数：
两个方法的参数是一样的。<br />**callback与thisValue**

| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | callback | 必选 | 用来测试数组的每个元素的**函数**。 |
| 参数二 | thisValue | 可选 | 执行 callback 时，用于 this 的值。<br />对象作为该执行回调时使用，传递给函数。<br />如果省略了 thisValue ，"this" 的值为 "undefined" |

1. **callback的参数列表**
| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | element | 必选 | 当前元素 |
| 参数二 | index | 可选 | 当前元素的索引值 |
| 参数三 | array | 可选 | 调用了 `find && findIndex` 的数组本身 |

2. **thisValue的参数**

可选。要传递给函数以用作其 "this" 值的值。<br />如果此参数为空，则值 "undefined" 将作为其 "this" 值传递。
### 返回值：
返回值不同：

- `find`返回满足所提供函数的第一个元素的值，否则返回`undefined`。
- `findIndex`返回满足所提供函数的第一个元素元素的索引，否则返回`-1`。
### 示例:
```javascript
const Array = [
  { name: "孙悟空", age: 3 },
  { name: "猪八戒", age: 4 },
  { name: "沙和尚", age: 5 },
];

// 查找数组中 age 为 4 的值
let find = Array.find(  
  (item) => {
    return item.age === 4;
  }
);

// 查找数组中 age 为 4 元素的索引
let findIndex = Array.findIndex(
  (item) => {
    return item.age === 4;
  }
);

console.log(find); // { name: "猪八戒", age: 4 } 返回值为 value
console.log(findIndex); // 1 返回值为 索引值
```
### 细节:
`find && findIndex`方法在第一次调用`callback`函数时会确定元素的索引范围
> 在`find && findIndex`方法开始执行之后添加到数组的新元素将不会被`callback`函数访问到。如果数组中一个尚未被callback函数访问到的元素的值被`callback`函数所改变，那么当`callback`函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍然会被访问到。

# slice && splice
### 描述：
`slice()` 与`splice()`方法都是JS中数组用来删除数组元素并返回操作结果。

- slice() 方法以新的数组对象，返回数组中被选中的元素。
- splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。

​

splice用法不仅仅是删除，它还能够实现对数组元素的删除、插入、替换操作，返回值为被操作的值。<br />​

**_⚠️注意：_**_splice会导致数组塌陷。数组塌陷：使用splice删除元素时，剩余的数组元素索引的顺序会改变。_<br />​<br />
### 语法：
两个方法的语法是不一样的。
```javascript
Array.slice(begin, end);
Array.splice(start, deleteCount, item1, item2, ... ,itemx);
```
### 参数：
两个方法的参数是不一样的。在 [MDN](https://developer.mozilla.org/) 中这些参数是这样描述的：<br />​

`slice()`的参数：<br />begin 与 end

| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | begin | 可选 |  提取起始处的索引（从 0 开始）从该索引开始提取原数组元素 |
| 参数二 | end | 可选 |  提取终止处的索引（从 0 开始）在该索引处结束提取原数组元素 |

1. **begin**
   - 提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
   - 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
   - 如果省略 begin，则 slice 从索引 0 开始。
   - 如果 begin 超出原数组的索引范围，则会返回空数组。
2. **end**
   - 提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。
   - slice(1,4) 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
   - 如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
   - 如果 end 被省略，则 slice 会一直提取到原数组末尾。
   - 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。

​

`splice()`的参数<br />start 与 deleteCount 与 item1, item2, ..., itemx

| ​<br /> | 参数 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| 参数一 | start | 必选 | 指定修改的开始位置（从0计数） |
| 参数二 | deleteCount | 可选 | 整数，表示要移除的数组元素的个数。 |
| 参数三 | item1, item2, ..., itemx | 可选 | 要添加进数组的元素,从start 位置开始。 |

1. **start**

指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

2. **deleteCount**
   - 整数，表示要移除的数组元素的个数。
   - 如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
   - 如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
   - 如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
3. **item1, item2, ..., itemx**

要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
### 返回值：
返回值不同：

- slice 一个含有被提取元素的新数组。
- splice 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
### 示例:
```javascript
const Array = [
  { name: "孙悟空", age: 3 },
  { name: "猪八戒", age: 4 },
  { name: "沙和尚", age: 5 },
];

// 查找数组中 age 为 4 的值
const slice = Array.slice(0, 2);

// 查找数组中 age 为 4 元素的索引
const splice = Array.splice(0, 0, { name: "唐僧", age: 2 });

console.log(slice);
/*
  { name: "孙悟空", age: 3 },
  { name: "猪八戒", age: 4 },
*/

console.log(splice);  // 【】//向数组中增加一个元素

console.log(Array);  //
/*
  { name: "唐僧", age: 2 }
  { name: "孙悟空", age: 3 },
  { name: "猪八戒", age: 4 },
  { name: "沙和尚", age: 5 },
*/
```
### 细节:
> - `slice` 如果向两个数组任一中添加了新元素，则另一个不会受到影响。
> 
但如果是原数组中有一是个对象引用(不是实际的对象)`slice`会拷贝这个对象引用到新的数组里，两个对象引用是相同的，那么被引用的对象改变，则新的和原数组中的这个元素也会发生改变。
> - `splice` 如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

# 
# 方法列表
方法属性：

| 方法 | 改变原数组 | 返回值描述 | 描述 |
| --- | --- | --- | --- |
| some() | 否 | 布尔值 | 检查数组。 |
| every() | 否 | 布尔值 | 检查数组。 |
| find() | 否 | 所查找到的值 | 查找目标元素。 |
| findindex() | 否 | 所查找到的值的索引值 | 查找目标元素。 |
| slice() | 否 | 一个含有被提取元素的新数组 | 删除数组元素。 |
| splice() | 是 | 被删除的元素组成的一个数组 | 删除数组元素。 |

