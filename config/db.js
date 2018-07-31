var mysql = require('mysql');

var connection = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'crestani',
        password: 'my1313',
        database: 'portal_noticias',
        insecureAuth : true
    });
};

module.exports = function(){
    return connection;
};
