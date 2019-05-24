//Requires
var express = require('express');
var mongoose = require ('mongoose');

//Inicializar variables
var app = express();

//Importar rutas
var appRoutes = require('./Routes/app');

//Middlewares
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS")
  next();
});
app.use('/',appRoutes);

//conexion a la base de datos de test
mongoose.connection.openUri('mongodb://localhost:27017/sgpdb',(err,res)=>{
  if(err) throw err;
  console.log(`Base de datos en el puerto ${27017}: \x1b[32m%s\x1b[0m`,'online');

});
//Escuchar peticiones
app.listen(3001, () =>{
	console.log('Express server puerto 3000:\x1b[32m %s \x1b[0m','online');
});
