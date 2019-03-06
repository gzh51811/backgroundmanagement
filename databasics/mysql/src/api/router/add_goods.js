const express = require('express');
const Router = express.Router();

const db = require('../db/data');

//添加商品
Router.get('/', (req, res) => {
    console.log('req打印：'+req.query.class,req.query.yuan,req.query.name,req.query.status,req.query.xian,req.query.date,req.query.num);

    if(req.query.class ==0){
        req.query.class ='手机';
    }else if(req.query.class==1){
        req.query.class = '笔记本'
    }else if(req.query.class==2){
        req.query.class = '平板'
    }else if(req.query.class==3){
        req.query.class = '配件'
    }else if(req.query.class==4){
        req.query.class = '其他'
    }
    // 查询是否有这一条商品类型
    let sql = `SELECT *FROM list WHERE name = '${req.query.name}'`;
   
    db.query(sql,(err,data)=>{
        if(err){
            console.log('err');
            return;
            // res.send("商品已存在");
        }
        console.log(data);
// 如果数组不为空就返回提示商品已存在，空就添加商品
        if(data.length==0){
           
            let sql2 = `INSERT INTO list(name,class,oPrice,nPrice,reserve,status,date)VALUES('${req.query.name}','${req.query.class}','${req.query.yuan}','${req.query.xian}','${req.query.num}','${req.query.status}','${req.query.date}')`;
            console.log(666)
            db.query(sql2,(err,data)=>{
                if(err){
                    console.log('err');
                    return ;
                }
                res.send("1");
            })
        }else{

             res.send("0");
        }
      
    });
  
});

module.exports = Router;
