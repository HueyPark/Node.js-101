var fs = require('fs');

function start(res) {
    console.log('Request handler start was called.');
    fs.readFile('./start.html', function (err, data) {
        if (err) throw err;
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    });
}

function upload(res) {
    console.log('Request handler upload was called.');
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('upload');
    res.end();
}

exports.start = start;
exports.upload = upload;