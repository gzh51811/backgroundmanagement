const express = require('express');

const Router = express.Router();
//引入连接池连接上数据库；
const db = require('../db/data');
const bodyParser = require('body-parser');
// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

Router.post('/', jsonParser, urlencodedParser, (req, res) => {
    let { name, pasw } = req.body;
    console.log(name, pasw);
    //查询数据
    var sql = `select * from username_clsaaify where username='${name}' and passw='${pasw}' `;
    db.query(sql, function (err, result) {
        // console.log(result);

        if (err) throw err;
        if (result.length > 0) {
            res.send('1');
        } else {
            res.send('0');
        }



    })


});

module.exports = Router;



