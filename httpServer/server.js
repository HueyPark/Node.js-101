var http = require('http');

function start() {
    function onRequest(req, res) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('hello world\n');
    }

    http.createServer(onRequest).listen(9100);
    console.log('Server hase started on port 9100');
}

exports.start = start;