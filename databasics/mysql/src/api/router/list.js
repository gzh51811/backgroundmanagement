const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//商品列表
Router.get('/', (req, res) => {
    let { page, limit } = req.query;
    console.log(page, limit);
    console.log((page - 1)*limit,page*limit);
    let sql = `select * from list limit ${(page - 1) * limit},${limit}`;
    db.query(sql, (err, data) => {
        if (err) {
            res.send({ code: 1, msg: "链接不成功", });
            return
        }
        res.send({ code: 0, msg: "", count: 123, data: data });
    });

});

module.exports = Router;
