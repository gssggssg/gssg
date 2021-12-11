let a: string = "nihao";
let b: boolean = true;
let c: number = 0;

// 当编译器不知道数据类型的时候，使用类型断言可以告诉编译器类型
/**
* 类型断言
* variable as type
* <type> variable
*/

function fn(a: number, b: boolean): void {
return;
}

let obj: { name: string, [propName: string]: any };
obj = {
name: "nihao",
age: 18,
gender: "男"
}


// 元组
/**
* 已知长度的数组
*/
let tuples: [number, string];
tuples = [1, "2"];

// 枚举
/**
* 将已知可能属性列出来
* 可以用作类型
*/
enum sex {
male,
female
};

let a1: { name: string, sex: sex };
a1 = { name: "ni", sex: sex.male };


// 类型别名
type myType = 1 | 2 | 3 | 5 | 6;
let num: myType;
num = 2;