/*
String 常用方法
  1. typeof : 类型判断
  2. indeOf : 查询字符串中是否包含指定子字符串
  3. length : 返回字符串的长度
  4. charAt(下标) : 取字符串中指定下标的字符
  5. substring(开始下标, 结束下标) : 取字符串中指定范围的子字符
  6. substr(开始下标, 长度) : 取字符串中指定范围的子字符
  7. replace : 将字符串中的部分内容替换
  8. toUpperCase/toLowerCase : 将字符串变成大/小写
  9. trim : 去除字符串两头的空格(包括 space, Tab 等)
  10. split : 将字符串分割成数组
*/

const typeofString = {
  id: 'typeofString',
  title: '1. typeof : 类型判断',
  initialValue: `str = 'a'`,
  handlingMethod: `type = typeof str`,
}

const indexOfString = {
  id: 'indexOfString',
  title: '2. indexOf : 查询字符串中是否包含指定子字符串',
  initialValue: `str = 'aasdqwdscs'`,
  handlingMethod: `index = str.indexOf('sd'); // 返回值为索引值`,
}

const lengthString = {
  id: 'lengthString',
  title: '3. length : 返回字符串长度',
  initialValue: `str = 'aasdqwdscs'`,
  handlingMethod: `num = str.length;`,
}

const charAtString = {
  id: 'charAtString',
  title: '4. charAt(下标) : 取字符串中指定下标的字符',
  initialValue: `str = 'aasdqwdscs'`,
  handlingMethod: `num = str.charAt(6);`,
}

const substringString = {
  id: 'substringString',
  title: '5. substring(开始下标, 结束下标) : 取字符串中指定范围的子字符',
  initialValue: `str = 'aasdqwdscs'`,
  handlingMethod: `num = str.substring(4, 8); `,
}

const substrString = {
  id: 'substrString',
  title: '6. substr(开始下标, 长度) : 取字符串中指定范围的子字符',
  initialValue: `str = 'aasdqwdscs'`,
  handlingMethod: `num = str.substr(4, 5); `,
}

const replaceString = {
  id: 'replaceString',
  title: '7. replace : 将字符串中的部分内容替换',
  initialValue: `str = 'aasdqwadscs'`,
  handlingMethod: `num = str.replace('aasd', 'nihao');
num1 = str.replace(/a/g, 'nihao');
alert(' num ==> ' + num + ' num1 ==> ' + num1 );`,
}

const toCaseString = {
  id: 'replaceString',
  title: '8. toUpperCase/toLowerCase : 将字符串变成大/小写',
  initialValue: `str = 'aasdqwadscs'`,
  handlingMethod: `upperCase = str.toUpperCase();
lowerCase = str.toLowerCase();  
alert(' 大写 ==> ' + upperCase + ' 小写 ==> ' + lowerCase );
`,
}

const trimString = {
  id: 'trimString',
  title: '9. trim : 去除字符串两头的空格(包括 space, Tab 等)',
  initialValue: `str = '  aasdADscs  '`,
  handlingMethod: `num = str.trim();`,
}

const splitString = {
  id: 'splitString',
  title: '10. split : 将字符串分割成数组',
  initialValue: `str = 'aasdADscs'`,
  handlingMethod: `num = str.split(''); // 根据 空格 将字符串分割为数组 `,
}

operationMetho[3].initData = [
  typeofString,
  indexOfString,
  lengthString,
  charAtString,
  substringString,
  substrString,
  replaceString,
  toCaseString,
  trimString,
  splitString,
];

play();