const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');
function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello world'); //普通输出

// Interpolated
console.log('hello %s', 'world'); // 可以使用字符串代替

// Styled
console.log('%c hello world', 'font-size:50px'); //  %c css样式

// warning!
console.warn('hello world'); // 输出警告

// Error :|
console.error('hello world'); // 输出错误

// Info
console.info('hello world');  //在控制台输出一条带有“信息”图标的消息和一个指向代码调用位置的超链接。

// Testing
console.assert(1 === 2, 'This is false'); //验证第一个参数是否为真，为真就输出第二个参数 ，如果不是真，会在控制台写一条消息并抛出异常

// clearing
// console.clear(); //清除控制台

// Viewing DOM Elements
console.log(p);
console.dir(p); //以列表形式输出一个对象的所有属性，有点和你查看DOM窗口相类似。

// console.clear(); //清除控制台

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);  //输出一条消息，并打开一个嵌套块，块中的内容都会缩进。该命令可以嵌套使用。
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`); //关闭最近一个由console.group打开的块。
});

// counting
/*
  记录 count() 调用次数，并输出到控制台：
*/
console.count('hello');
console.count('hello');
console.count('hello');
console.count('world');
console.count('world');
console.count('world');

// timing
console.time('fetching data');  // 开启计时器
fetch('https://api.github.com/users/gssggssg')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); // 关闭计时器
        console.log(data);
    });

//table
console.table(dogs);
