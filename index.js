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
  let state = {
    1: 1,
    2: 1,
    3: 1,
    4: 1
  };

  client.on('connect', () => { console.log('connected'); });

  client.on('increment', (pos) => { 
    state[pos] += 1;
    console.log('New State -> ' + JSON.stringify(state));
  });

  client.on('getData', (pos) => { 
    // Do our stuffs
    client.emit('data', JSON.stringify(state));
  });

  client.on('disconnect', () => { console.log('disconnected'); });
});

server.listen(3000);