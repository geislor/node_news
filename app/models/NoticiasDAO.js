function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}


NoticiasDAO.prototype.getLastFive = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.saveNoticia = function(noticia, callback) {
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback);
    console.log('SALVOU');
}
 
module.exports = function(){
    return NoticiasDAO;
}