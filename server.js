const http = require('http');
const app = require('./app');
var secret = require('./config/secret');

const server = http.createServer(app);

server.listen(secret.port, function() {
    console.log('app runing on port : ' + secret.port);
});