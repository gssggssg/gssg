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

for (const value of generator()) {
  console.log(value)
}
/**
 * A
 * B
 */