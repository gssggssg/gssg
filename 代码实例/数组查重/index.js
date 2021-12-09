const arr = [1, 2, 4, 1, 3, 2, 1122, 23, 2, 2, 32, 1, 12, 2, 3314, 54, 6667, 121, 5323];
const arr1 = [1, '2', '2', 'dasdsds', 'dasdsds', 'dasdsds', 'dasdsds', 8, '8', 5, '8', 58, 5, 'dasdsds', 0, '0', '23', 0, '0'];

// 数组查重
/*
  1. 试用for循环 与 indexOf 相当于遍历两次数组
  2. indexOf IE9以下不支持 返回值为下标
  3. includes 是ES2016 引入的方法
*/
function rechecking(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

console.log(rechecking(arr1));