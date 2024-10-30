# JavaScript
## 字符串

### 三种引号   
字符串可以包含在单引号、双引号或反引号中
```javascript
//用法
let single = 'Single quotation mark';   //单引号
let double = "Double quotation mark";   //双引号
let backquote = `backquote`;            //反引号
```

- __单引号__ 与 __双引号__ 基本相同。
- __反引号__ 允许我们通过 ${…} 将任何表达式嵌入到字符串中：
- __反引号__ 允许字符串换行：
```javascript
//用法
//可以插入变量及表达式
var a = "Hello";
alert(`${a} World`); // Hello World

//可以换行
let row = `first line
    Second line
    Third line
`;
```

### 字符串特殊字符

所有的特殊字符都以反斜杠字符 \ 开始。它也被称为“转义字符”。

```javascript
//用法
let string1 = "Hello\nWorld"; 

let string2 = "\u{20331}";  // 佫，罕见的中国象形文字（长 unicode）

```
| 代码 | 输出 | 
| :-------- | -------- |
| \' | 	单引号  | 
| \" | 	双引号  | 
| \& |	和号    | 
| \\ |	反斜杠  | 
| \n |	换行符  | 
| \r |	回车符  | 
| \t |	制表符  | 
| \b |	退格符  | 
| \f |	换页符  | 
| \xXX | 具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同。 | 
| \uXXXX |	以 UTF-16 编码的十六进制代码 XXXX 的 unicode 字符，例如 \u00A9 —— 是版权符号 © 的 unicode。它必须正好是 4 个十六进制数字。  | 
| \u{X…XXXXXX}（1 到 6 个十六进制字符） |	具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。  | 

### length 
length 属性表示字符串长度

```javascript
//用法
let string = 'Hello';

console.log(string.length);// 5
```
注意: _str.length 是一个数字属性，而不是函数。后面不需要添加括号_

### charAt()与[]
要获取在 某个 位置的一个字符可以用 <b>charAt()</b> 或者 <b>[]</b>
第一个字符从零位置开始：
```javascript
//用法
let string = 'Hello';

string.charAt(0); //H
string.[0]; //H

string.charAt(10); //""
string.[10]; //undefined，
```
如果没有找到字符:
- __[]__ 返回 undefined,
- __charAt()__ 返回一个空字符串.

### toLowerCase() 与 toUpperCase()
- toLowerCase()   方法可以将字符串英文全部变成小写字母：
- toUpperCase()   方法可以将字符串英文全部变成大写字母：
```javascript
//用法
'Hello'.toLowerCase(); //hello
'Hello'.toUpperCase(); //HELLO
```
### indexOf()
方法可返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到，则返回 -1。
有两个参数
必选的第一个参数是你要查找的字符串
可选的第二个参数允许我们从给定的起始位置开始检索。
```javascript
//用法
let string = 'Hello World';
string.indexOf('H') // 0
string.indexOf('H', 2) // -1
```
### includes()，startsWith()，endsWith()
- __includes()__：方法返回布尔值，表示是否找到了参数字符串。(_第二个参数允许我们从给定的起始位置开始检索。_)
- __startsWith()__：方法返回布尔值，表示参数字符串是否在原字符串的头部。
- __endsWith()__：方法返回布尔值，表示参数字符串是否在原字符串的尾部。
```javascript
//用法
let string = 'Hello World';
string.includes('World') // true
string.includes('World'，6) // false
string.startsWith('H') // true
string.endsWith('d') // true
```
### slice(),substr(),substring()
都是截取字符串，三个方法都接收 __两个参数__
- __slice()__  方法第一个参数可为负数。第二个参数是指定截取长度。
- __substr()__  方法第一个参数为负数被替换成0。交换参数位置，小的在前。第二个参数是指定结束位置。
- __substring()__ 方法第一个参数可为负数。第二个参数是指定结束位置。
```javascript
//用法
 var string = 'hello world';

string.slice(-3);         //rld
string.substr(-3);        //rld
string.substring(-3);     //hello world

string.slice(3,-4);       //lo w
string.substr(3,-4);      //""
string.substring(3,-4);   //hel
```
注意：_substr()第二个参数指定的是截取的长度，slice()和substirng()第二个参数指定截取的结束位置_。
| 方法 | 选择方式…… | 负值参数 | 
| :-------- | :-------- | :-------- |
| slice() | 	从 __第一个参数__ 到 __第二个参数__（不含 __第二个参数__）  | 	允许  | 
| substring() | __第一个参数__ 与 __第二个参数__ 之间（包括 __第一个参数__，但不包括 __第二个参数__  | 负值代表 0 | 
| substr() | 从 __第一个参数__ 开始获取长为 __第二个参数__ 的字符串 | 允许 __第一个参数__ 为负数 | 

### codePointAt() 与 String.fromCodePoint()
codePointAt()  方法返回在 参数 位置的字符代码 :
String.fromCodePoint()   方法通过 参数 创建字符

```javascript
//用法

// 大小写字母意思不同
"z".codePointAt(0); // 122

"Z".codePointAt(0); // 90

String.fromCodePoint(90); // Z

```
注意：_字符串的比较是按字母顺序逐字比较。所有的字符串都使用 UTF-16 编码。比较字母大小，是比较字母在编码中数字代码的大小_