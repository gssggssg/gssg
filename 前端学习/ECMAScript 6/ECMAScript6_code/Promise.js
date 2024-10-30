/**
 * This is a Promise example
 * @module promise
 * @return
 */

// 返回一个 promise 对象
const promise = function (num) {
  const promise = new Promise((resolve, reject) => {
    if (num === 0) {
      resolve(num); // 状态转化为完成
    }
    reject(num); // 状态转化为失败
  });
  return promise;
};

// then的返回值为 Promise 对象，可以实现链式调用
promise(0)
  .then((num) => {
    console.log("第一次调用", num);
    return ++num;
  })
  .then((num) => {
    console.log("第一次调用", num);
    return ++num;
  })
  .then((num) => {
    console.log("最后一次调用", num);
  })
  .catch((error) => console.log("不是从0开始 : " + error));
