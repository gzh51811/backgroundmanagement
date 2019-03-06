const express = require('express');
const Router = express.Router();

const db = require('../db/data');
// console.log(data);

//用户名列表
Router.get('/', (req, res) => {
    //连接数据库
    // console.log(req.query);
    // console.log('req打印：' + req.query.id);
    let sql = `select * from username_clsaaify where id='${req.query.id}'`;

    db.query(sql, (err, data) => {
        if (err) {
            res.send({ code: 1, msg: "连接不成功", });
            return
        }

        res.send({ code: 0, msg: "", count: 3, data: data });
        // 打印出数据的对象
    })


});

module.exports = Router;