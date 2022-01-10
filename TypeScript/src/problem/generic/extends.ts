/**
 * extends 关键字
 */

/**  
 * extends在TS中，代表着从一个类型扩展出另外一个新类型，这个新类型是原来这个类型的子类型。
 * 同时，extends在TS中具有条件属性，它用于判断一个类型是否是另外一个类型的子类型
 * 在这一意义上，TS和JS中的extends具有完全不同的性质。
 * JS中extends代表继承（inherit），而TS中extends就是它的字面意思“扩展”。
 */

const extendsGssg = (function () {

  interface A1 {
    name: string;
  };

  // A2 extends 了A1 满足
  interface A2 extends A1 {
    style: string,
  };

  const A3: A2 = {
    name: "aaa",
    style: "",
  };

  // extends 在条件分支语句上的应用
  type A = {
    name: string;
    state: boolean;
  };

  type B = {
    name: string;
  };

  // 鼠标移到 类型名 上方，获取提示
  type AType = A extends B ? 'yes' : 'no'; // AType => 'yes'
  type BType = A extends B ? 'yes' : 'no'; // BType => 'no'

})();

export default extendsGssg;