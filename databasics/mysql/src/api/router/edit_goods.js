const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//修改商品列表
Router.get('/', (req, res) => {
    console.log('req打印：'+req.query.id)
    let sql2 = `SELECT * FROM list WHERE id='${req.query.id}'
    `;
   
    db.query(sql2,(err,data)=>{
        if(err){ 
            console.log('err');
            return;
        }
        console.log(data);
        res.send({data:data});
    });
  
});

module.exports = Router;
