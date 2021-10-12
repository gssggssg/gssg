const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

// Array.prototype.filter()

console.log("第一题：筛选那些出生于1500年代的发明家名单")
// 1. Filter the list of inventors for those who were born in the 1500's
let one = inventors.filter((currentValue, index, arr) => {
  // console.log("currentValue",currentValue)
  // console.log("index",index)
  // console.log("arr",arr)
  return currentValue.year > 1500 && currentValue.year < 1600;
})

console.table(one)

console.log("---------------------------------------------------------------------------------------------")

console.log("第二题：给我们一组发明家的名字和姓氏")

//给我们一组发明家的名字和姓氏
let two = inventors.map(
  (item, index) => {
    return item.first + " " + item.last;
  }
)

console.table(two)

console.log("---------------------------------------------------------------------------------------------")

console.log("第三题：按出生日期对发明家进行排序，从大到小")
//给我们一组发明家的名字和姓氏
let three = inventors.sort(
  (a, b) => {
    return a.year < b.year ? 1 : a.year > b.year ? -1 : 0
  }
)

console.table(three)

console.log("---------------------------------------------------------------------------------------------")

console.log("第四题：所有的发明家一起生活了多少年？")

let four = inventors.reduce(
  (and, currentValue) => {
    return and += currentValue.passed - currentValue.year
  }, 0)

console.log("所有的发明家一起活了" + four + "年！")

console.log("---------------------------------------------------------------------------------------------")

console.log("第五题：按寿命对发明家进行分类。")

let five = inventors.sort(
  (a, b) => {
    return a.passed - a.year > b.passed - b.year ? 1 : a.passed - a.year < b.passed - b.year ? -1 : 0;
  }
)

console.table(five)

console.log("---------------------------------------------------------------------------------------------")

console.log("第六题：创建巴黎大道的列表，其中包含名称中任意位置的“de”")
// 创建巴黎大道的列表，其中包含名称中任意位置的“de”

console.log("第七题：按姓氏的字母顺序对这些人进行排序")

let seven = people.sort(
  (a, b) => {
    let [aLast, aFirst] = a.split(', ');
    let [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : aLast < bLast ? -1 : 0;
  }
)

console.table(seven)

console.log("---------------------------------------------------------------------------------------------")

console.log("第八题：减少运动，请总结每一个例子")

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let eight = data.reduce(
  (obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
  }, {})

console.table(eight);
