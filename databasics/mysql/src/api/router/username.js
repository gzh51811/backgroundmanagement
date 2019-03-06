const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//用户名列表
Router.get('/', (req, res) => {
    //连接数据库
    let { page, limit } = req.query
    console.log(page, limit);
    // console.log((page - 1) * limit, page * limit);
    let sql = `select * from username_clsaaify limit ${(page - 1) * limit},${limit}`;

    db.query(sql, (err, data) => {
        if (err) {
            res.send({ code: 1, msg: "连接不成功", });
            return
        }

        res.send({ code: 0, msg: "", count: 21, data: data });
        // 打印出数据的对象
    })


});

module.exports = Router;