const express = require('express');
const Router = express.Router();

//商品列表
Router.get('/', (req, res) => {
    res.send('商品列表');
});

module.exports = Router;
