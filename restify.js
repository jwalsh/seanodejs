var restify = require('restify');
var server = restify.createServer();

server.get('/my/:name', function(req, res) {
  res.send(200, {
    message: 'Hello ' + req.uriParams.name
  });
});

server.listen(8080);