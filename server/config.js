const mysql = require("mysql");
const client = mysql.createConnection({
    // 主机地址
    host: "127.0.0.1",
    // 用户名
    user: "root",
    // 密码
    password: "wwjssg4444",
    // 数据库名
    database: "ceshi"
})

/**
 * query 执行数据库语句的方法
 *      sql:数据库语句
 *      srr: 数据库语句的参数
 *      callback: 相应结果的回调函数
 */

module.exports = function sqlFn(sql, arr, callback) {
    client.query(sql, arr, (error, result) => {
        if (error) {
            console.log(error)
            return;
        }
        callback(result)  // 回调函数
    });
}
