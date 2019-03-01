const express = require('express');
const Router = express.Router();

Router.post('/', (req, res) => {
    res.send('登录');
});

module.exports = Router;
