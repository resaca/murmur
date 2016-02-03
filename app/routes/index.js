'use strict';
module.exports = function(app, io) {
  app.get('/', function(req, res) {
    res.render('index');
  });
  require('./chat')(app);
  require('./socket')(io);
};
