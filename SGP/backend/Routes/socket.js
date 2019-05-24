
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const socketIOFileUpload = require('socketio-file-upload');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.sockets.on('connection', function(socket, req){
    var uploader = new socketIOFileUpload();
    uploader.dir = __dirname + '/uploads/_temp/';
    uploader.listen(socket);

    uploader.on('start', function(event){
    	var newdirectory = '';
    	if (event.file.meta.dest) {
    		newdirectory = __dirname + '/uploads/' + event.file.meta.dest;
				if (newdirectory !== '') {
					if (!fs.existsSync(newdirectory)) {
						fs.mkdirSync(newdirectory);
					}
					uploader.dir = newdirectory;
				}
    	}
    });
    uploader.on('saved', function(event){
        // console.log('[Server] saved: ', event.file.pathName);
        event.file.clientDetail.pathName = event.file.pathName;
    });

    // Error handler:
    uploader.on('error', function(event){
        console.log('Error from uploader');
    });
});
