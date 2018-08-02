module.exports = function(){

    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
        connection.query('select * from noticias where id_noticia = 1', callback);
    }

    this.saveNoticia = function(connection, noticia, callback) {
        connection.query('insert into noticias set ?', noticia, callback);
    }
    return this;
};