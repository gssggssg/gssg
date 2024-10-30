# JavaScript
## 数字类型
目前有两种类型：
1. number
2. BigInt 是表示任意长度的整数

数字的三个特殊值
1. Infinity 
属性用于存放表示正无穷大的数值。
2. -Infinity 
属性用于存放表示负无穷大的数值。
3. NaN
属性用于引用特殊的非数字值。

### e可以代替任意零    
- 正数： 

```javascript
//用法
1e3 = 1 * 1000   
1.23e6 = 1.23 * 1000000 
```

- 负数   
```javascript
//用法
let ms = 1e-6; // 1 的左边有 6 个 0
```

### 十六进制，二进制和八进制数字
格式：   
- 十六进制：0x数字    
- 八进制进制：0b数字    
- 二进制进制：0o数字    

十六进制书不分大小写

### 数字方法及属性: 
JavaScript 有一个内建的 Math 对象，它包含了一个小型的数学函数和常量库。
#### toString()  

```javascript
//用法
let num = 255;
num.toString(16);  // ff
num.toString(2);   // 11111111
```   

#### floor() ceil() round() trunc()
1. 数字.floor
向下舍入：3.1 变成 3，-1.1 变成 -2。
2. 数字.ceil
向上舍入：3.1 变成 4，-1.1 变成 -1。
3. 数字.round
向最近的整数舍入：3.1 变成 3，3.6 变成 4，-1.1 变成 -1。
4. 数字.trunc（IE 浏览器不支持这个方法）
移除小数点后的所有内容而没有舍入：3.1 变成 3，-1.1 变成 -1。 
```javascript
//用法
Math.floor(value)
Math.ceil(value)
Math.round(value)
Math.trunc(value)
```   

这个是总结它们之间差异的表格：

|  | **Math.floor** | **Math.ceil** | **Math.round** | **Math.trunc** |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| 3.1 | 3.1 | 3.1 | 3.1 |
| 3.1 | 3 |	4 | 3 | 3 |
| 3.6 |	3 | 4 | 4 | 3 |
| -1.1 | -2 | -1 | -1 |	-1 |
| -1.6 | -2	| -1 | -2 |	-1 |


#### toFixed() 
方法可把 Number 四舍五入为指定小数位数的数字。
```javascript
//用法
let num = 1.1111;
num.toFixed(1) 
```

注意 : _返回的是一个字符_
#### isNaN() 与 isFinite()
1. isNaN(value)
将其参数转换为数字，然后测试它是否为 NaN：
2. isFinite(value)
将其参数转换为数字，如果是常规数字，则返回 true，而不是 NaN/Infinity/-Infinity：

```javascript
//用法
isNaN(NaN);// true
isNaN("str");// true
isFinite(1); // true
isFinite("str"); // false，因为是一个特殊的值：NaN
isFinite(Infinity); // false，因为是一个特殊的值：Infinity
```

注意，_在所有数字函数中，包括 isFinite，空字符串或仅有空格的字符串均被视为 0。_

#### parseInt() 与 parseFloat()
从字符串中“读取”数字，直到无法读取为止。如果发生 error，则返回收集到的数字。
函数 parseInt 返回一个整数，
函数 parseFloat 返回一个浮点数：


__parseInt(string, radix);__ 可以传两个参数
第一个参数为数字(必填)，第二个参数为表示要解析的数字的基数(选填)。该值介于 2 ~ 36 之间。

```javascript
//用法
parseInt('10px'); // 10
parseFloat('1.2em'); // 1.2

parseInt('44.4'); // 44，只返回整数部分
parseFloat('1.2.3.4'); // 1.2，在第二个点出停止了读取

parseInt('a1'); // NaN，第一个符号停止了读取

parseInt("1f",16);// 31
```
注意:_如果字符串的第一个字符不能被转换为数字，那么parseInt() 与 parseFloat() 会返回 NaN。_

#### 其他数学函数


##### random()
返回一个从 0 到 1 的随机数（不包括 1）

```javascript
//用法
Math.random(); 
```
##### Math.max() 与 Math.min()
从任意数量的参数中返回最大/最小值
```javascript
//用法
Math.max(1, 3, 5, -1); // 5
Math.min(1, 4, 6 ,7 ); // 1
```
##### Math.pow()
返回 <kbd>参数一</kbd> 的给定 <kbd>参数二</kbd> 次幂
Math.pow()必须有两个参数，第一个参数是 底数 ___(必须是数字)___ 第二个参数是	幂数 ___(必须是数字)___ 
```javascript
//用法
Math.pow(2, 3); // 2**3=8
```
### 总结

__Math__ 对象用于执行数学任务。
使用 __Math__ 的属性和方法的语法：
```javascript
//用法
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15);
```

注意：_Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。_

| **属性** | **描述** |
| :------- | :------- |
| E	            |   返回算术常量 e，即自然对数的底数（约等于2.718）。    |
| LN2	        |   返回 2 的自然对数（约等于0.693）。                  |
| LN10	        |   返回 10 的自然对数（约等于2.302）。                 |
| LOG2E	        |   返回以 2 为底的 e 的对数（约等于 1.414）。          |
| LOG10E        |	返回以 10 为底的 e 的对数（约等于0.434）。          |
| PI	        |   返回圆周率（约等于3.14159）。                       |
| SQRT1_2	    |   返回返回 2 的平方根的倒数（约等于 0.707）。          |
| SQRT2	返回    |   2 的平方根（约等于 1.414）。                        |

| **方法** | **描述** |
| :------- | :------- |
| abs(x)	    | 返回数的绝对值。
| acos(x)       | 	返回数的反余弦值。
| asin(x)	    |返回数的反正弦值。
| atan(x)	    |以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
| atan2(y,x)    |	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
| ceil(x)	    |对数进行上舍入。
| cos(x)	    |返回数的余弦。
| exp(x)	    |返回 e 的指数。
| floor(x)	    |对数进行下舍入。
| log(x)	    |返回数的自然对数（底为e）。
| max(x,y)  	|返回 x 和 y 中的最高值。
| min(x,y)	    |返回 x 和 y 中的最低值。
| pow(x,y)  	|返回 x 的 y 次幂。
| random()  	|返回 0 ~ 1 之间的随机数。
| round(x)	    |把数四舍五入为最接近的整数。
| sin(x)	    |返回数的正弦。
| sqrt(x)	    |返回数的平方根。
| tan(x)	    |返回角的正切。
| toSource()	|返回该对象的源代码。
| valueOf()	    |返回 Math 对象的原始值。