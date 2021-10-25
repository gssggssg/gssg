/*
    步骤1. 比较普通变数
    字串、整数或布尔值的参照，只要宣告一变数复制，两者即为不同；这几个类型类似实值型别的参照
*/

let age = 100;
let age2 = age;
console.log("age= " + age, "age2= " + age2); // 100,100
age = 200;
console.log("age= " + age, "age2= " + age2); // 200,100

let name = "Wes";
let name2 = name;
console.log("name= " + name, "name2= " + name2); // Wes,Wes
name = "wesley";
console.log("name= " + name, "name2= " + name2); // wesley,Wes

// 数组的复制就类似参照型别了，所以可以通过一些函数回传新的对象，有以下几种方式

/* 
    * slice()
    * [].concat
    * Spread
    * Array.from
*/
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// 这四种方式都可以
// let player2 = players.slice();
// let player2 = players.concat();
// let player2 = [...players];
let player2 = Array.from(players);

player2[0] = "jojo";

console.table(players);
console.table(player2);


// 对象的拷贝
// 对象的拷贝和数组的拷贝是一样的。需要深拷贝，才能不受原对象引用的影响
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
};
const dev2 = JSON.parse(JSON.stringify(wes));

dev2.social.twitter = "@coolman";
console.log(dev2.social, wes.social);