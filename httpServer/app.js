var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('hello world\n');
}

http.createServer(onRequest).listen(9100);