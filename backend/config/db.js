const mysql= require('mysql2');
const pool = mysql.createPool({
    host:'mysql-master',
    user:'root',
    password:'rootpass',
    database:'ecommerce',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool.promise();