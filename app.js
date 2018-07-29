var app = require('./config/server'); 

var routeHome = require('./app/routes/home')(app); 
var routeNoticies = require('./app/routes/noticias')(app); 
var routeFormAddNoticies = require('./app/routes/formulario_inclusao_noticia')(app); 

app.listen(3000, function(){
    console.log('Server Running');
});