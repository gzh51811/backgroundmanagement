const express = require('express');
let app = express();

// // 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
// app.use(bodyParser.json());
// const jsonParser = bodyParser.json();
const Router = require('./api/router');
app.use(express.static('./'));

app.use('/api', Router);

app.listen(10086, () => {
    console.log('sever is OK');
})