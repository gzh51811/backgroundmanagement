const express = require('express');
const Router = express.Router();
//引入连接池连接上数据库；
const db = require('../db/data');

//商品分类
Router.get('/', (req, res) => {
    // console.log(res.query);
    //连接数据表
    let sql = "select * from classify_goods";
    // let result = "select count(*) from classify_goods";select * from classify_goods
    // select * from classify_goods where id in (select min(id) from classify_goods group by a)
    // 查询表${res.query.goodsname}
    db.query(sql, (err, data) => {
        // console.log(data);
        if (err) {
            res.send({ code: 1, msg: "连接不成功", });
            return
        }

        res.send({ code: 0, msg: "", count: 3, data: data });
        // 打印出数据的对象
    })


});

module.exports = Router;