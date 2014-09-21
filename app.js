var app = require('express.io')();
app.http().io();

app.io.route('ready', function(req) {
  req.io.emit('talk', {
    message: 'io event'
  });
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html')
});

app.listen(8080);
