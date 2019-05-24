//requires
var express = require('express');
var mime = require('mime');
var fs = require('fs');
var path = require('path');

//inicializar variables
var app = express();

//=============================================
//Buscar archivo en carpetas
//=============================================
app.get('download/:folder/:file', function(req, res) {
	var cookies = parseCookies(req);
  var file = __dirname + '/uploads/'+ cookies.username +'/'+ req.params.folder +'/'+ req.params.file;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', 'application/force-download');
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

//=============================================
//Buscar archivo en intercambio
//=============================================
app.get('intercambio/:file', function(req, res) {
	var cookies = parseCookies(req);
  var file = __dirname + '/zonaintercambio/'+ req.params.file;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', 'application/force-download');
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});


app.delete('api/intercambioarchivos/:file', function(req, res, next) {
	var cookies = parseCookies(req);
	var filePath = __dirname + '/uploads/'+ cookies.username +'/intercambio/'+ req.params.file;
	fs.unlinkSync(filePath);
  res.json([{'deleted': true, 'file': req.params.file}]);
});

//=============================================
//Buscar archivos por usuario
//=============================================
app.get('api/intercambioarchivos/:username?', function(req, res) {
	var files = [];
	var username = (req.params.username) ? req.params.username : req.cookies.username;
	if (typeof username === 'undefined') {
		res.status(404);
	}
	var folder = './uploads/'+ username +'/';

	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
		fs.mkdirSync(folder);
	}
	folder += 'intercambio/';
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
	}
	fs.readdir(folder, function(err, data) {
		if (err) {
			res.json();
		}

		for (var i = data.length - 1; i >= 0; i--) {
			if (!data[i].startsWith('.')) {
				files.push({
					url: '/download/intercambio/'+ data[i],
					name: data[i],
					size: getFilesizeInBytes(folder + data[i]),
					mine: mime.lookup(data[i])
				});
			}
		}
		res.json(files);
	});
});

//=============================================
// Funciones Auxiliares
//=============================================

function parseCookies (request) {
	var list = {},
	rc = request.headers.cookie;
	rc && rc.split(';').forEach(function( cookie ) {
		var parts = cookie.split('=');
		list[parts.shift().trim()] = decodeURI(parts.join('='));
	});
	return list;
}

function getFilesizeInBytes(filename) {
	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats.size; // bytes
	return Math.round(fileSizeInBytes);
}
