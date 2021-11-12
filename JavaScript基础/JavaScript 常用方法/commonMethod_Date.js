/* 
Date 常用方法
  1. new Date() : 获取时间
  2. get : 获取年月日时分秒的单独一个
  3. set : 设置数值，跟 get 用法类似
  4. getTime : 时间转毫秒数
*/

const newDate = {
  id: 'newDate',
  title: '1. new Date() : 获取时间',
  initialValue: `let date = ''`,
  handlingMethod: `date = new Date()`,
}

const getDate = {
  id: 'getDate',
  title: '2. get : 获取年月日时分秒的单独一个',
  initialValue: `date = new Date()`,
  handlingMethod:
    `date.getFullYear();   // 获取 年份
date.getMonth();      // 获取 月份
date.getDate();       // 获取 日
date.getHours();      // 获取 时
date.getMinutes();    // 获取 分
date.getSeconds();    // 获取 秒
`,
}

const setDate = {
  id: 'setDate',
  title: '3. set : 设置数值，跟 get 用法类似',
  initialValue: `date = new Date()`,
  handlingMethod:
    `date.setFullYear(2000);   // 设置 年份
date.setMonth(1);      // 设置 月份
date.setDate(1);       // 设置 日
date.setHours(00);      // 设置 时
date.setMinutes(00);    // 设置 分
date.setSeconds(00);    // 设置 秒
// 返回值为一个时间戳
`,
}

const getTimeDate = {
  id: 'getTimeDate',
  title: '4. getTime : 时间转毫秒数',
  initialValue: `date = new Date(2000,01,01,00,00,00)`,
  handlingMethod: `date.getTime();`,
}

operationMetho[1].initData = [
  newDate,
  getDate,
  setDate,
  getTimeDate,
];

