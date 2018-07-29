var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'crestani',
        password: 'my1313',
        database: 'portal_noticias',
        insecureAuth : true
    });
};
