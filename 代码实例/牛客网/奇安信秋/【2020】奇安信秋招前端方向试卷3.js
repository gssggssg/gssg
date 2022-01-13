// 测试用例
const arr = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1]
];

const arr1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param grid char字符型二维数组 
 * @return int整型
 */
function numIslands(grid) {
  let num = 0;
  let nums = 0
  let newGrid = grid;
  let newarr = newGrid.map((item) => item.map(() => num++));
  let arr = [[]];
  let checkArr = (param) => {
    let isHave = false;
    let indexx = 0;
    param.forEach(
      (item) => {
        let pd = item.index >= 0 && item.index < grid.length && item.index1 >= 0 && item.index < grid[0].length;
        arr.length > 0 && arr.forEach(
          (item1, index1) => {
            if (pd && item1.includes(newarr[item.index][item.index1])) {
              isHave = true;
              indexx = index1;
            }
          }
        )
      }
    )
    if (!isHave) {
      return false;
    }
    return indexx;
  };
  newGrid.map(
    (item, index) => {
      item.map(
        (item1, index1) => {
          if (item1 === 1) {
            let indexs = [
              {
                index: index - 1,
                index1: index1,
              },
              {
                index: index + 1,
                index1: index1,
              },
              {
                index: index,
                index1: index1 - 1,
              },
              {
                index: index,
                index1: index1 + 1,
              },
            ];
            let b = checkArr(indexs);
            if (b === false) {
              nums = arr[0].length <= 0 ? 0 : arr.length;
              arr[nums] = [];
            } else {
              nums = b;
            }
            arr[nums].push(newarr[index][index1]);
          }
        }
      )
    }
  );
  return ++nums;
}
const jg = numIslands(arr);
console.log(jg)
module.exports = {
  numIslands: numIslands
};
console.log("object")