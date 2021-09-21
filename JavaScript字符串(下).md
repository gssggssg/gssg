# JavaScript
## 字符串四道练习题

《字符上》分享了字符串的相关概念内容，

话不多说，直接看题目

1. 首字母大写
2. 检查指定支付查
3. 截断文本
4. 提取字符串

#### 1. 首字母大写
写一个函数 ucFirst(str)，并返回首字母大写的字符串 str，例如：
```javascript 
ucFirst("john") == "John";
```
#### 2. 检查指定字符串
写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
函数必须不区分大小写：
```javascript 
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
```
#### 3. 截断文本
创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。

函数的结果应该是截断后的文本（如果需要的话）。
```javascript 
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
```
#### 4. 提取货币
我们有以 "$120" 这样的格式表示的花销。意味着：先是美元符号，然后才是数值。

创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回。
```javascript 
alert( extractCurrencyValue('$120') === 120 ); // true
```


## 解答

#### 第一题 首字母大写
思路
实现
#### 第二题 检查指定字符串
思路
实现
#### 第三题 截断文本
思路
实现
#### 第四题 提取货币
思路
实现