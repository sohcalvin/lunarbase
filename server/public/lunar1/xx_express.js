var express = require('express'),
    app = express(),
    http = require('http').createServer(app).listen(61337),
    sys = require('util'),
    exec = require('child_process').exec,
    io = require('socket.io')(http),
    fs = require('fs');

app.use('/resources', express.static('resources'));

function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./resources/index.html', 'utf8', function (err,data) {
            res.end(data);
        });
});

app.get("/api/update", function(req, res) {
    exec("sh /path/to/update.sh &", puts);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('1');
});

io.sockets.on('connection', function (socket) {

});
