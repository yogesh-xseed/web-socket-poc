var basePath = __dirname;
var fs = require('fs');
var path = require('path');
const server = require('http').createServer(function (req, res) {
  var stream = fs.createReadStream(path.join(basePath, req.url));
  stream.on('error', function () {
    res.writeHead(404);
    res.end();
  });
  stream.pipe(res)
});
const io = require('socket.io')(server);


io.on('connection', client => {
client.on('connect', () => { console.log('connected'); });
client.on('event', () => { console.log('running'); });
client.on('disconnect', () => { console.log('disconnected'); });

});


server.listen(3000);