/**
 * This is a Promise example
 * @module Iterator
 * @return iterator
 */

// 通过for...of 遍历 iterator 返回 iterator.interest 的数据
const iterator = {
  name: "Tom",
  age: 16,
  interest: ["打游戏", "听音乐", "打球", "旅游"],
  [Symbol.iterator]: function () {
    _this = this;
    let index = 0;
    return {
      next() {
        if (index <= _this.interest.length) {
          return { value: _this.interest[index++], done: false }
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
 * export 输出
 * 打游戏
 * 听音乐
 * 打球
 * 旅游
 * undefined
 */