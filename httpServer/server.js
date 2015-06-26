var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(pathname);

        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('hello world\n');
    }

    http.createServer(onRequest).listen(9100);
    console.log('Server hase started on port 9100');
}

exports.start = start;