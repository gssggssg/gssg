/* 
Array 常用方法
pop : 删除数组最后一位元素
shift : 删除数组第一位元素
push : 往数组的末尾新增一个或多个元素
unshift : 往数组的开头新增一个或多个元素
reverse : 把数组元素顺序逆转
sort : 数组排序
splice : 给数组添加或者删除元素
forEach : 遍历数组
filter : 从数组中找出所有符合指定条件的元素
every : 数组中是否每个元素都满足指定的条件
some : 数组中是否有元素满足指定的条件
map : 将数组映射成另一个数组
reduce : 将数组合成一个值
isArray : 是否是数组
concat : 合并数组或合并数组的值
join : 合并数组所有元素拼接成字符串
slice : 选择数组中的一部分元素
indexOf : 查找数组中指定元素的下标
lastIndexOf : 查找数组中指定元素的下标。查找方向为从后往前
*/

const popArray = {
  id: 'popArray',
  title: '1. pop : 删除数组最后一位元素',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod: `arr.pop();`,
}

const shiftArray = {
  id: 'shiftArray',
  title: '2. shift : 删除数组第一位元素',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod: `arr.shift();`,
}

const pushArray = {
  id: 'pushArray',
  title: '3. push : 往数组的末尾新增一个或多个元素',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod: `arr.push(4);`,
}

const unshiftArray = {
  id: 'unshiftArray',
  title: '4. unshift : 往数组的开头新增一个或多个元素',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod: `arr.unshift(-1,0);`,
}

const reverseArray = {
  id: 'reverseArray',
  title: '5. reverse : 把数组元素顺序逆转',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod: `arr.reverse();`,
}

const sortArray = {
  id: 'sortArray',
  title: '6. sort : 数组排序',
  initialValue: `arr = [1, 2, 3]`,
  handlingMethod:
    `arr.sort(
  (a,b)=>{
    return a < b ? -1 : 1 ; //  从小到大排
  }
)
alert(" arr sort : 数组排序===> " + arr );`,
}

const spliceArray = {
  id: 'spliceArray',
  title: '7. splice : 给数组添加或者删除元素',
  initialValue:
    `arr = [1, 2, 3]; 
arr1 = [1, 2, 3, 4, 5];
arr2 = [0, 1, 2, 3, 4, 5, 6, 7]`,
  handlingMethod:
    `arr.splice(1, 1, 3) // 替换
arr1.splice(1, 0, 3) // 新增
arr2.splice(1, 2) // 删除
alert(" arr 替换===> " + arr );
alert(" arr1 新增===> " + arr1 );
alert(" arr2 删除===> " + arr2 );
`,
}

const forEachArray = {
  id: 'forEachArray',
  title: '8. forEach : 遍历数组',
  initialValue: `arr = [11, 12, 13, 14, 15, 16]; `,
  handlingMethod:
    `arr.forEach(
  (item,index)=>{
    alert(" item===> " + item + " " + " index===> " + index );
  }
)`,
}

const filterArray = {
  id: 'filterArray',
  title: '9. filter : 从数组中找出所有符合指定条件的元素',
  initialValue: `arr = [1, 2, 11, 12, 13]; `,
  handlingMethod:
    `const newArr = arr.filter(
  (item)=>{
    return item > 7;
  }
)
alert(" newArr ===> " + newArr);
`,
}

const everyArray = {
  id: 'everyArray',
  title: '10. every : 数组中是否每个元素都满足指定的条件',
  initialValue: `arr = [1, 2, 'a', 11, 12, 13];`,
  handlingMethod:
    `const newArr = arr.every(
  (item)=>{
    return  typeof(item) === 'number';
  }
)
alert(" newArr ===> " + newArr);
`,
}

const someArray = {
  id: 'someArray',
  title: '11. some : 数组中是否有元素满足指定的条件',
  initialValue: `arr = [1, 2, 'a', 11, 12, 13]; `,
  handlingMethod:
    `const newArr = arr.some(
  (item)=>{
    return  item === 11;
  }
)
alert(" newArr ===> " + newArr);
`,
}

const mapArray = {
  id: 'mapArray',
  title: '12. map : 将数组映射成另一个数组',
  initialValue: `arr = [1, 2, 11, 12, 13];`,
  handlingMethod:
    `const newArr = arr.map(
  (item)=>{
    return  ++item;
  }
)
alert(" newArr ===> " + newArr);
`,
}

const reduceArray = {
  id: 'reduceArray',
  title: '13. reduce : 将数组合成一个值',
  initialValue: `arr = [1, 2, 11, 12, 13];`,
  handlingMethod:
    `const newArr = arr.reduce(
  (acc ,item)=>{
    return  acc + item;
  }
)
alert(" newArr ===> " + newArr);
`,
}

const isArrayArray = {
  id: 'isArrayArray',
  title: '14. isArray : 是否是数组',
  initialValue: `arr = [1, 2, 11, 12, 13];`,
  handlingMethod: `alert(Array.isArray(arr));`,
}

const concatArray = {
  id: 'concatArray',
  title: '15. concat : 合并数组或合并数组的值',
  initialValue: `
arr = [1, 2, 3, 4, 5];
arr1 = ['a', 'b', 'c', 'd'];
`,
  handlingMethod:
    `const newArr = arr.concat( arr1 );
alert(" newArr ===> " + newArr);
`,
}

const joinArray = {
  id: 'joinArray',
  title: '16. join : 合并数组所有元素拼接成字符串',
  initialValue: `arr = [1, 2, 'a', 'b' ];`,
  handlingMethod: `arr.join();  // 转化成为字符串类型`,
}


const sliceArray = {
  id: 'sliceArray',
  title: '17. slice : 选择数组中的一部分元素',
  initialValue: `arr = [1, 2, 'a', 'b' ];`,
  handlingMethod:
    `const newArr = arr.slice(2,4);
const newArr1 = arr.slice(1,9);
const newArr2 = arr.slice(1,-1);
alert("newArr ===> " + newArr);
`,
}

const indexOfArray = {
  id: 'indexOfArray',
  title: '18. indexOf : 查找数组中指定元素的下标',
  initialValue: `arr = [1, 2, 2, 'a', 2, 'b' ];`,
  handlingMethod: `arr.indexOf(2);`,
}

const lastIndexOfArray = {
  id: 'lastIndexOfArray',
  title: '19. lastIndexOf : 查找数组中指定元素的下标。查找方向为从后往前',
  initialValue: `arr = [1, 2, 2, 'a', 2, 'b' ];`,
  handlingMethod: `arr.lastIndexOf(2);`,
}

operationMetho[0].initData = [
  popArray,
  shiftArray,
  pushArray,
  unshiftArray,
  reverseArray,
  sortArray,
  spliceArray,
  forEachArray,
  filterArray,
  everyArray,
  someArray,
  mapArray,
  reduceArray,
  isArrayArray,
  concatArray,
  joinArray,
  sliceArray,
  indexOfArray,
  lastIndexOfArray,
];

