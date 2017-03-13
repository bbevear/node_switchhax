var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/'));
server.listen(80);

console.log('Server running on port 80');
