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


// 封装了一些方法
function arrayMethod(...parameter) {
  try {
    let { id, title, initialValue, handlingMethod } = parameter[0];
    let liArr = exampleUl[0].getElementsByTagName('li');
    let index = liArr.length;
    addLi(id, title, initialValue, handlingMethod, 0);
    butFn(index, id, 0);
  }
  catch (e) {
    alert('❌ ！！！' + e);
  }
}

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
);`,
}

const lis = lists[0].querySelectorAll('li');

const commonMethodArrayTheBackup = [popArray, shiftArray, pushArray, unshiftArray, reverseArray, sortArray];

let commonMethodArray = JSON.parse(JSON.stringify(commonMethodArrayTheBackup))

lis.forEach(
  (item, index) => {
    if (commonMethodArray.length <= index) {
      return;
    }
    item.innerHTML = `<a href="#${commonMethodArray[index].id}">${item.innerText}</a>`
  }
)

commonMethodArray.forEach(
  (item) => {
    arrayMethod({ ...item });
  }
)