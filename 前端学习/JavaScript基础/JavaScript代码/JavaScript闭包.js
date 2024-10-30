const a = 4;
function f(a) {
    let variate = 4;
    const c = function () {
        // 2. 函数 f 执行完成 ，执行函数 f 时形成私有的上下文环境中的变量 variate 被函数 c 中的内容所引用
        // 每次调用 result() 都会从 函数 f 的执行上下文中寻找变量 variate 来引用
        variate++;
        console.log(variate + a);
    }
    return c;
}

// 1. 执行函数 f ，会形成 f 私有的上下文环境
const result = f(a);
// 3.  函数 f 并没用被释放，变量 variate 也就没用被销毁，而是还存在



// 由于 variate 没用被销毁，导致每次运行 result() 使用的 variate 会递增
result(); // 9
result(); // 10
result(); // 11
result(); // 12