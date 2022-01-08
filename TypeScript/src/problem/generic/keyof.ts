/**
 * keyof 操作符
 */

const keyofGssg = (function () {

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

})();

export default keyofGssg;