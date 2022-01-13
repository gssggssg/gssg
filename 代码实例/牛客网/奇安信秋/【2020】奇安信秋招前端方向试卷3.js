// 编程题第一题
// 测试用例
const arr = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1]
]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param grid char字符型二维数组 
 * @return int整型
 */
function numIslands(grid) {
  let num = 0;
  let newArr = grid;
  let nums = 0;
  let isNo = false;
  let mapFrid = grid.map(
    (item, index) => {
      let aaa = item.map(
        (item1, index1) => {
          let isCan = false
          isNo = false
          if (item1 === 1) {
            // 上
            isCan = newArr[index - 1] && newArr[index - 1][index1] ? true : false
            // 下
            isCan = isCan === true ? true : newArr[index + 1] && newArr[index + 1][index1] ? true : false
            // 左
            isCan = isCan === true ? true : newArr[index][index1 - 1] ? true : false;
            // 右
            isCan = isCan === true ? true : newArr[index][index1 + 1] ? true : false;
            isCan === true ? newArr[index][index1] = nums : false;
            isNo = true
          }
          isNo && nums++;
          return nums;
        }
      )
      return aaa
    }
  );
  newArr.forEach((item) => {
    item.forEach(
      (item1) => {
        item1 === 1 && num++
      }
    )
  });

  return num;
}
const jg = numIslands(arr);

console.log(jg)
module.exports = {
  numIslands: numIslands
};