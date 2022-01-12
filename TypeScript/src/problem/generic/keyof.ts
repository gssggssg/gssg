/**
 * keyof 操作符
 * @return 联合类型
 */

/**
 * keyof 操作符
 * 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
 */

const keyofGssg = (function () {

  enum me { women, man };

  // K extends keyof T 继承了 K 的类型，并将 K 类型的所有键
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  };

  let meInfo = {
    name: "GSSG",
    age: 20,
    sax: me.man,
  };

  // K extends keyof T 就相当于
  let mes = getProperty(meInfo, 'name');

})();

export default keyofGssg;