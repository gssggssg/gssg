/**
 * This is a Promise example
 * @module Iterator
 * @return iterator
 */

// 通过for...of 遍历 iterator 返回 iterator.interest 的数据
const iterator = {
  name: "gssg",
  age: 20,
  interest: ["打游戏", "听音乐", "打球", "旅游"],
  [Symbol.iterator]: function () {
    _this = this;
    let index = 0;
    return {
      next() {
        if (index <= _this.interest.length) {
          index++;
          return { value: _this.interest[index - 1], done: false }
        }
        return { value: undefined, done: true }
      },
    }
  }
}

for (const value of iterator) {
  console.log(value);
}
/**
 * 打游戏
 * 听音乐
 * 打球
 * 旅游
 * undefined
 */
