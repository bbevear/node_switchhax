var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/'));
// server.get('/', (res, req) => {
//   console.log(res);
// });
server.post('/pwned', (req, res) => {
  console.log(req.body);
});
server.listen(80);

console.log('Server running on port 80');
