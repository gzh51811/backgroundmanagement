const express = require('express');
const Router = express.Router();
//引入连接池连接上数据库；
const db = require('../db/data');
const bodyParser = require('body-parser');
// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();
//商品分类
Router.post('/', jsonParser, urlencodedParser, (req, res) => {
    let { title, passw, phone, modules, date, modules1, emil, desc1, add_date } = req.body;
    console.log(title, passw, phone, modules, date, modules1, emil, desc1);


    //增加数据
    var addsql = `INSERT INTO username_clsaaify(username,passw,sex,city,email,phone,bir,desc1,joinTime) VALUES('${title}','${passw}','${modules}','${modules1}','${emil}','${phone}','${date}','${desc1}','${add_date}')`;
    // var addsqlparams = ['汪丹萍', '24', '女'];
    db.query(addsql, function (err, result) {
        if (err) {
            console.log('error');
            return;
        } else {
            // 写入成功返回1
            res.send('12333333');
        }

    })


});

module.exports = Router;




// Router.post('/',(req, res) => {

//     //查询数据
//     var sql = `select * from username_clsaaify where username='${name}' and passw='${pasw}' `;
//     db.query(sql, function (err, result) {
//         // console.log(result);

//         if (err) throw err;
//         if (result.length > 0) {
//             res.send('1');
//         } else {
//             res.send('0');
//         }



//     })


// });