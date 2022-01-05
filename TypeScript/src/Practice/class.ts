class Greeter {

  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  };

  // 静态属性
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  };

  // 成员方法
  greet() {
    return "Hello, " + this.greeting;
  };
}

let greeter = new Greeter("world");