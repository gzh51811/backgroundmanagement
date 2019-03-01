const express = require('express');
const Router = express.Router();

//用户名列表
Router.get('/', (req, res) => {
    res.send('用户列表');
});

module.exports = Router;