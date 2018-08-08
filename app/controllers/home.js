module.exports.index = function(app, req, res){
    var connection = app.config.db();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getLastFive(function(err, result){
        res.render("home/index", {noticias : result});
    });
}