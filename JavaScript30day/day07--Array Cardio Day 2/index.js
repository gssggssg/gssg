
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// 是否有人满18岁
console.log("第一题：是否有人满18岁")
const one = people.some((item) => { return new Date().getFullYear() - item.year >= 19 })
console.log(one);

console.log("---------------------------------------------------------------------------------------------")

// is everyone 19?
// 每个人都有19岁吗？

console.log("第二题：每个人都有19岁吗？")

const two = people.every((item) => { return new Date().getFullYear() - item.year >= 19 })
console.log(two);

console.log("---------------------------------------------------------------------------------------------")

console.log("第三题：从comments 找到id 是823423 的资料")

const three = comments.find((item) => { return item.id === 823423 })
const three1 = comments.findIndex((item) => { return item.id === 823423 })
console.log(three);
// console.log(three1);

console.log("---------------------------------------------------------------------------------------------")

// 从comments 删除id 是823423 这笔资料(splice, slice)
console.log("第四题：从comments 删除id 是823423 这笔资料")

const four = comments.splice(three1, 1)[0]

console.log(four);
console.log("comments===", comments)