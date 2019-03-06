const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//删除商品列表
Router.get('/', (req, res) => {
    console.log('req打印：'+req.query.id)
    let sql2 = `delete from list where id ='${req.query.id}'
    `;
    db.query(sql2,(err,data)=>{
        if(err){
            console.log('err');
            return;
        }
        res.send({code:0,msg:"",count:10,data:data});
    });
  
});

module.exports = Router;
