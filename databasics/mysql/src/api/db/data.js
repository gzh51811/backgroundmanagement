var mysql = require('mysql');
console.log(1323);
//创建连接池
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'egu',

});

pool.query('select * from users', (error, rows) => {
    console.log(error, rows);
});