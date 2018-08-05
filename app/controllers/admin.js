module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validation: {}, noticia: {}});
};

module.exports.salvar_noticias = function(app, req, res){
    var noticia = req.body;

    req.assert('titulo', 'Título é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracters').len(10,100);
    
    var error = req.validationErrors();
    if (error){
        res.render("admin/form_add_noticia", {validation: error, noticia: noticia});
        return;
    }

    var connection = app.config.db();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.saveNoticia(noticia, function(error, result){
        res.redirect("/noticias");t
     });
};