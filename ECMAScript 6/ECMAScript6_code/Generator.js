/**
 * This is a Promise example
 * @module Generator
 * @return iterator
 */

function* generator() {
  let A = yield 'A';
  let B = yield 'B';
  yield A;
  yield B;
  return "C";
}

let result = generator();

console.log(result.next(0)); // {value: 'A', done: false}
console.log(result.next(1)); // {value: 'B', done: false}
console.log(result.next(2)); // {value: '1', done: false}
console.log(result.next()); // {value: 2, done: false}
console.log(result.next()); // {value: undefined, done: true}

for (const value of generator()) {
  console.log(value);
}
/**
 * A
 * B
 * undefined
 * undefined
 */