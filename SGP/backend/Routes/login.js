
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('../config.json');

var app = express();

//=============================================
// Requerir token e ingresar
//=============================================
app.post('/acceder', function(req, res, next) {
	// res.status(401).send({error:'Clave incorrecta'});
	var options = {
		host: config.login_host,
		port: config.login_port,
		path: config.login_path,
		headers: { 'uid': req.body.uid, 'pwd': req.body.pwd }
	};

	http.get(options, function(response) {
		var body = '';
		response.on('data', function(d) {
			body += d;
		});
		response.on('end', function() {
			var parsed = JSON.parse(body);

			if (parsed.token) {
				res.cookie('token', parsed.token);
				res.cookie('username', parsed.username);
				res.cookie('actions', parsed.actions.join(','));
				res.cookie('empresa_name', parsed.empresa.name);
				res.cookie('empresa_logo', parsed.empresa.logo);
				res.cookie('lastLogin', (parsed.lastLogin !== null) ? parsed.lastLogin : Date.now());

				req.session.username = parsed.username;
			}
			res.status(response.statusCode).send(parsed);
		});

	});
});
// app.get('/api/user/resetpw', function(req, res) {
// 	res.json({uid: req.body.uid, message: 'Enviado'});
// });
