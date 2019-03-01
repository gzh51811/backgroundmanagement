const express = require('express');
let app = express();

const Router = require('./api/router');
app.use(express.static('./'));

app.use('/api', Router);

app.listen(10086, () => {
    console.log('sever is OK');
})