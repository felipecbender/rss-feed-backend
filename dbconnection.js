var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b3aa86c85768e5',
    password: '2e5f247b',
    database: 'heroku_2403e0367b0ac6e'
});

module.exports = connection;