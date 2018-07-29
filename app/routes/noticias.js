module.exports = function(app){

    app.get('/noticias', function(req, res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'crestani',
            password: 'my1313',
            database: 'portal_noticias',
            insecureAuth : true
        });

        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });
};
