var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(handle, pathname);

        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('hello world\n');
    }

    http.createServer(onRequest).listen(9100);
    console.log('Server hase started on port 9100');
}

exports.start = start;