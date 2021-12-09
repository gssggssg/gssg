/**
 * This is a Promise example
 * @module Generator
 * @return iterator
 */

 function* generator() {
  yield 'A';
  yield 'B';
  return 'C';
}

let result = generator();

console.log(result.next()); // {value: 'A', done: false}
console.log(result.next()); // {value: 'B', done: false}
console.log(result.next()); // {value: 'C', done: true}
console.log(result.next()); //{value: undefined, done: true}

for (const value of generator()) {
  console.log(value);
}
/**
 * A
 * B
 */