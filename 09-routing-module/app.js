const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(8080);

console.log('Listening Port on 8080');
