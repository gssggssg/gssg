/*
Math 常用方法
  Math.max() : 最大值
  Math.min() : 最小值
  Math.ceil() : 向上取整
  Math.floor() : 向下取整
  Math.round() : 四舍五入
  Math.random() : 获取一个属于[0,1)的随机数
  Math.abs(num) : 是返回num的绝对值
  toFixed() : 将数值格式化为字符串
  parseInt() : 返回整型的数字
  parseFloat() : 将字符串转为数字，返回浮点型的数字
  Number() : 函数把对象转换为数字
*/

const maxMath = {
  id: 'maxMath',
  title: '1. Math.max() : 最大值',
  initialValue: `num = [3, 0, 7, -90, 2, 1]`,
  handlingMethod: `Math.max(...num)`,
}

const minMath = {
  id: 'minMath',
  title: '2. Math.min() : 最小值',
  initialValue: `num = [3, 0, 7, -90, 2, 1]`,
  handlingMethod: `Math.min(...num)`,
}

const ceilMath = {
  id: 'ceilMath',
  title: '3. Math.ceil() : 向上取整',
  initialValue: `num = 0.1`,
  handlingMethod: `Math.ceil(num)`,
}

const floorMath = {
  id: 'floorMath',
  title: '4. Math.floor() : 向下取整',
  initialValue: `num = 1.9`,
  handlingMethod: `Math.floor(num)`,
}
const roundMath = {
  id: 'roundMath',
  title: '5. Math.round() : 四舍五入',
  initialValue:
    `num1 = 0.5;
num2 = 0.4`,
  handlingMethod:
    `numup = Math.round(num1);
numdn = Math.round(num2);
alert(' num1 ==> ' + numup + ' num2 ==> ' + numdn )
`,
}

const randomMath = {
  id: 'randomMath',
  title: '6. Math.random() : 获取一个属于[0,1)的随机数',
  initialValue: ``,
  handlingMethod: `num = Math.random()`,
}

const absMath = {
  id: 'absMath',
  title: '7. Math.abs(num) : 是返回num的绝对值',
  initialValue: `num = -0.1`,
  handlingMethod: `Math.abs(num)`,
}

const toFixedMath = {
  id: 'toFixedMath',
  title: '8. toFixed() : 将数值格式化为字符串',
  initialValue: `num = 12345`,
  handlingMethod:
    `const oldType = typeof(num);
const newType = typeof(num.toFixed());
alert(" 转换前 ===> " + oldType + " 转换后 ===> " + newType );
`,
}

const parseIntMath = {
  id: 'parseIntMath',
  title: '9. parseInt() : 返回整型的数字',
  initialValue: `num = '12m'`,
  handlingMethod:
    `const newNum = parseInt(num);
alert(" newNum ===> " + newNum);`,
}

const parseFloatMath = {
  id: 'parseFloatMath',
  title: '10. parseFloat() : 将字符串转为数字，返回浮点型的数字',
  initialValue: `str = '4.53a1'`,
  handlingMethod: `parseFloat(str)`,
}
const numberMath = {
  id: 'numberMath',
  title: '11. Number() : 函数把对象转换为数字',
  initialValue: `str = '101010'`,
  handlingMethod: `const oldType = typeof(str);
const newType = typeof(Number(str));
alert(" 转换前 ===> " + oldType + " 转换后 ===> " + newType );`,
}

operationMetho[2].initData = [
  maxMath,
  minMath,
  ceilMath,
  floorMath,
  roundMath,
  randomMath,
  absMath,
  toFixedMath,
  parseIntMath,
  parseFloatMath,
  numberMath,
];
