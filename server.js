var express = require('express');
var server = express();

server.use(express.static(__dirname + '/public/'));
server.listen(9000);
console.log('Remarkr server started.');
