const puerto = 888;

const server = require('http').createServer((req, res) => {
    const out = {
        'status' : 'OK',
        'msg' : {
            'url' : req.url
        }
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(out));
    res.end();
});

server
    .on('clienteError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    })
    .listen(puerto);
