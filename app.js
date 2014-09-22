var app = require('express.io')();
app.http().io();

app.io.route('capture', function(req) {
  console.log('capture: ' + req.data.length);
  // app.io.broadcast('image', req.data);
  req.io.respond(req.data);
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html')
});

app.listen(8080);
