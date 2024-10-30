/**
 * @time 2021-12-12
 * @introduce TypeScript Class learning
 */

class Person {
    //  属性
    name: string;
    age: number;
    // 构造器
    /**
     * constructor 函数里面可以对对象进行初始化，当对象被创建之前，会先调用 constructor 函数
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 方法
    /**
     * 在 class 中，只能使用 方法名(){} 形式，不能用 function 关键字来声明方法
     */
    sau(content: string): void {
        console.log(`${name}说了${content}`);
    }
}

// 实例化
/**
 * 类的实例化需要使用 new 关键字，使用 new 关键字的时候，会先调用类里面的构造函数 constructor
 */
const Tom = new Person("Tom", 18);

// 继承
/**
 * extends 字段来使用继承父类的所以属性及方法
 */
class Man extends Person {

    // 静态属性
    /**
     * 使用 static 关键字 可以将一些属性定义为类的属性，而不是实例的属性
     * 方法也是一样使用，使用静态方法后，不能被实例调用，只能通过类调用
     */

    static hobby: string = "听歌";
    static sing(): void {
        console.log("人会唱歌");
    }


    height: number;

    constructor(name: string, age: number, height: number) {
        /**
         * super 指代父类的构造函数
         * 由于在子类中使用 constructor 构造函数将父类的 constructor 函数会进行重写，
         *  必须使用 super() 调用父类的 constructor 来进行初始化
         */
        super(name, age);
        // 可以新增属性
        this.height = height;
    }

    // 重写
    /**
     * 在子类中写父类同名方法，将会将父类方法覆盖，叫做重写
     */
    sau(): void {
        console.log(`我是一个男人`);
    }
}

const man = new Man("Tom", 18, 170);


class Woman extends Person {
    // 关键字
    /**
     * public 公共属性/方法，在所有位置都能访问/使用()
     * private 私有属性/方法 只能在当前类中访问/使用
     * protected 受保护的属性/方法 可以在子类中访问/使用
     */
    // public name: string;
    // protected age: number;
    // private car: number;

    // 只读属性
    // readonly 关键字可以设置属性为只读
    readonly beautiful = true;
}


const moman = new Woman("Tom", 18);

// 抽象类
/**
 *  以 abstract 开头的 是抽象类，不能使用该类实例，只能继承
 * 抽象类中是抽象方法，
 */
abstract class animal {


    // 抽象方法
    /** 
    * 抽象方法必须写在抽象类里面
    * 子类必须对抽象方法进行重写
    * 并且不能写函数体
    */
    abstract eat(): void;
}

