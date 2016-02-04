var express = require('express'),
  path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3001);

var server   = require('http').Server(app);
var io       = require('socket.io')(server);

require('./routes')(app, io);
server.listen(app.get('port'));

module.exports = app;
