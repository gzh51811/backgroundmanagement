const express = require('express');
const Router = express.Router();
//引入连接池连接上数据库；
const db = require('../db/data');

//商品分类
Router.get('/', (req, res) => {
    console.log('req打印：' + req.query.id);
    //删除数据
    var delsql = ` DELETE FROM username_clsaaify where id ='${req.query.id}' `;
    db.query(delsql, function (err, result) {
        if (err) {
            console.log('err');
            return;
        }

        // res.send({ code: 0, msg: "", count: 3, data: result });
    })
    // res.send('ffffffffffffff');
});

module.exports = Router;