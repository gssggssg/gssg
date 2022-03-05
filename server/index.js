const express = require("express");
const app = express();
const router = require("./router")
// POST 引入参数
const bodyparser = require("body-parser")
// 使用cors 解决跨域问题
const cors = require("cors")


app.use(cors())
// 可以接收参数了
app.use(bodyparser.urlencoded({
    extended: true
}))

// body-parser中间件支持json解析, 添加中间件进行解析即可
app.use(bodyparser.json())

app.use("/api", router)

// 运行服务器
app.listen(3333, () => {
    console.log("服务器运行在3333端口上")
})