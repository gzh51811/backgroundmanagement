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
    let { title, passw, phone, modules, date, modules1, emil, desc1, add_date } = req.body;
    console.log(title, passw, phone, modules, date, modules1, emil, desc1, add_date);

    try {
        //改数据库数据
        var sql = `UPDATE username_clsaaify SET username= '${title}',passw= '${passw}',email= '${emil}',phone= '${phone}',bir= '${date}',desc1= '${desc1}',joinTime= '${add_date}',sex= '${modules}' WHERE username= '${title}' `;

        db.query(sql, function (err, result) {
            // console.log('result:'+result);
            res.send('修改成功');
        })
    } catch (e) {
        res.send('写入失败')
    }

});

module.exports = Router;



