/**
 * This is a async example
 * @module async/await
 * @return promise
 */

 async function asyncFn(time) {
  
  await new Promise(function (resolve) {
    setTimeout(() => {
      console.log("第一个await");
      resolve(); // 第一个激
    }, time);
  })

  await new Promise(function (resolve) {
    console.log("第二个await");
  })

  // 第二个await 后面的代码没有执行完，不会继续执行后面的代码
  return await new Promise(function (resolve) {
    console.log("第三个await"); // 第三个不会运行
  })

}

const result = asyncFn(1000);
console.log(result); // Promise{}

/**
 * export 输出
 * 执行顺序
 * Promise{}
 * 1s 后 第一个await 
 * 第二个await 
 */