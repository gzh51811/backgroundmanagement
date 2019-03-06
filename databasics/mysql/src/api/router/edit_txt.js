const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//修改商品列表
Router.get('/', (req, res) => {
    console.log('req打印：'+req.query.city,req.query.num,req.query.name,req.query.phone,req.query.price);
    if(req.query.city ==0){
        req.query.city ='手机';
    }else if(req.query.city==1){
        req.query.city = '笔记本'
    }else if(req.query.city==2){
        req.query.city = '平板'
    }else if(req.query.city==3){
        req.query.city = '配件'
    }else if(req.query.city==4){
        req.query.city = '其他'
    }
    
    let sql3 = `UPDATE list SET class = '${req.query.city}',oPrice = '${req.query.phone}',nPrice = '${req.query.price}',reserve = '${req.query.num}' WHERE name = '${req.query.name}'`;
    db.query(sql3,(err,data)=>{
        if(err){
            console.log('err');
            return;
        }
        console.log(data);
        res.send("1");
    });
  
});

module.exports = Router;
