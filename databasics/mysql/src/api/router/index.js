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

Router.use('/login', loginRouter);
Router.use('/list', listRouter);
Router.use('/add_goods', addRouter);
Router.use('/classify_goods', classRouter);
Router.use('/username', userRouter);
Router.use('/add_user', addnameRouter);




module.exports = Router;