const express = require('express');
const Router = express.Router();

// Ruoter.get();
// Ruoter.post();
const loginRouter = require('./login');
const listRouter = require('./list');
const addRouter = require('./add_goods');
const classRouter = require('./classify_goods');
const userRouter = require('./username');
const addnameRouter = require('./add_user');
// ==========================================
//删除单行分类列表
const del_cl_Router = require('./del_class');
//删除单行用户
const del_us_Router = require('./del_user');
//用户列表编辑
const che_us_Router = require('./change_user');
//用户修改完重新插入数据库
const up_us_Router = require('./up_user');
// 删除商品列表数
const del_list_Router = require('./del_list');
// 编辑商品
const edit_goods = require('./edit_goods');
const edit_txt = require('./edit_txt');


Router.use('/login', loginRouter);
Router.use('/list', listRouter);
Router.use('/add_goods', addRouter);
Router.use('/classify_goods', classRouter);
Router.use('/username', userRouter);
Router.use('/add_user', addnameRouter);
// +++++++++++++++++++++++++++++++++++++
Router.use('/del_class', del_cl_Router);
Router.use('/del_user', del_us_Router);
Router.use('/change_user', che_us_Router);
Router.use('/up_user', up_us_Router);

// 删除商品列表数路由
Router.use('/del_list', del_list_Router);

// 编辑
Router.use('/edit_goods', edit_goods);
Router.use('/edit_txt', edit_txt);



module.exports = Router;