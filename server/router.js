const express = require("express");
const router = express.Router();
const sqlFn = require("./config")

router.post("/register", (req, res) => {
    // console.log(req.body)
    const { username, password, email } = req.body;
    // 将数据写入到数据库里
    const sql = "insert into user values (null, ? ,? ,?)"
    const arr = [username, password, email]
    sqlFn(sql, arr, (result) => {
        // fieldCount: 0,
        // affectedRows: 1, // 大于0代表成功,影响行数
        // insertId: 0,
        // serverStatus: 2,
        // warningCount: 0,
        // message: '',
        // protocol41: true,
        // changedRows: 0
        if (result.affectedRows > 0){
            res.send({
                mas: "注册成功"
            })
        }else{
            res.send({
                mas: "注册失败"
            })
        }
            console.log('result===>', result)
    })
    // console.log(req)
   
})

module.exports = router;
