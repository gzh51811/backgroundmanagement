const express = require('express');
const Router = express.Router();

//商品添加
Router.get('/', (req, res) => {
    res.send('添加商品');
});

module.exports = Router;