//Requires
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var mongoose = require ('mongoose');

// var upload = require('./Routes/upload.js');

//Inicializar variables
var app = express();
var server = http.createServer(app);

//conexion a la base de datos de test
mongoose.connection.openUri('mongodb://localhost:27017/sgpdb',(err,res)=>{
  if(err) throw err;
  console.log(`Base de datos en el puerto ${27017}: \x1b[32m%s\x1b[0m`,'online');

});

//Middlewares
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS")
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded
app.use(bodyParser.json())// for parsing application/json
app.use(cookieParser())
app.use(session({
	secret: 'xw1qq2uiagkhat5m',
	resave: false,
	saveUninitialized: true
}));
//rutas
// var uploadRoutes = require('./Routes/upload');
// var socketRoutes = require('./Routes/socket');
// var loginRoutes = require('./Routes/login');
// var archivoRoutes = require('./Routes/archivo');






//rutas
// app.use('/',loginRoutes);
// app.use('/api',uploadRoutes);
// app.use('/',archivoRoutes);


//Escuchar peticiones
server.listen(3000, () =>{
	console.log('Express server puerto 3000:\x1b[32m %s \x1b[0m','online');
});
