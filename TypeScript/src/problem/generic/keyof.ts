/**
 * keyof 操作符
 */

/**  
 * 语句 let num 中，通过 let 来声明了一个变量，那怎样声明一个不确定的类型变量呢？ 
 * 答案是使用 infer 关键字，infer R 就是声明了一个类型变量 R。 
 */

 const keyofGssg = {

}

export default keyofGssg;
 enum Difficulty {
  Easy,
  Intermediate,
  Hard
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let tsInfo = {
   name: "Typescript",
   supersetOf: "Javascript",
   difficulty: Difficulty.Intermediate
}
 
let difficulty: Difficulty = 
  getProperty(tsInfo, 'difficulty'); // OK
