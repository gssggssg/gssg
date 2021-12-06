/**
 * This is a Promise example
 * @module promise
 * @return 
 */

// 返回一个 promise 对象
const promise = function (time) {
  const promise = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        reject(time); // 状态转化为失败
      }, time);
      resolve(time); // 状态转化为完成
    }
  );
  return promise;
}

// 链式调用
promise(1000).then(
  (parameter) => {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(parameter); // 状态改编为完成
        reject(); //状态转化为失败
      }
    );
    return promise;
  }
).then(
  (parameter) => {
    console.log("秒数是" + parameter + "s");
  }
).catch(error => console.log("超时啦！！！" + error + "s"))