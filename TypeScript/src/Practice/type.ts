// 基本数据类型
/**
 * string 字符串
 * boolean 布尔值 true false
 * number 数字
 * any 表示任意类型的值
 */
let a: string = "nihao";
let b: boolean = true;
let c: number = 0;


// 当编译器不知道数据类型的时候，使用类型断言可以告诉编译器类型
/**
* 类型断言
* variable as type
* <type> variable
*/
let variable: any;
variable as string;
<string>variable;


//  void
/**
 * void 表示该方法没有返回值，返回值为 null 或 undefined
 * 函数不写 return 的情况下是默认返回 undefined
 */
function fn(a: number, b: boolean): void {
  return;
}


// 任意类型
/**
 *  [ propName : string ] : any
 * 表示这个对象可以拥有任意属性，属性名为字符串，属性值为任意值类型
 */
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
enum sex {male,female};

let a1: { name: string, sex: sex };
a1 = { name: "ni", sex: sex.male };


// 联合类型
/**
 * 可以是用 | 符来表示多者中的一个
 */
let id: number | string;
id = 1;
id = "ni";


// 类型别名
/**
 * 关键字 type 给类型起个别名
 */
type myType = 1 | 2 | 3 | 5 | 6;
let num: myType;
num = 2;