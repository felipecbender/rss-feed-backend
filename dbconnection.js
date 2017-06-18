var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b3aa86c85768e5',
    password: '2e5f247b'
});
module.exports = connection;