const express = require('express');
const Router = express.Router();

//商品分类
Router.get('/', (req, res) => {
    res.send('用户添加');
});

module.exports = Router;