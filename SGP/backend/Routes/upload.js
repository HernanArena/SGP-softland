//requires
var express = require('express');
var multer = require('multer'); // v1.0.5

//inizialización de variables
var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('fileattach');

//=============================================
// Crear Partes
//=============================================
app.post('/partes', upload, function(req, res, next) {
	var result = [];
	result.push(req.body);

	res.contentType('application/json');
  res.json(JSON.stringify(result));
});
//=============================================
// Crear Habilitaciones
//=============================================
app.post('/habilitacion', upload, function(req, res, next) {
  res.json(req.body);
});

//=============================================
// Crear contactos
//=============================================
app.post('/contactos', upload, function(req, res, next) {
  res.json(req.body);
});
//=============================================
//Traer parte por empresa y nro
//=============================================
app.put('/parte/:nrocta/:nrofor', function(req, res, next) {
  res.json(req.body.parte);
});










function getFilesizeInBytes(filename) {
	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats.size; // bytes
	return Math.round(fileSizeInBytes);
}
