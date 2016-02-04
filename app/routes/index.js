'use strict';
module.exports = function(app, io) {
  app.get('/', function(req, res) {
    //send the index.html in our public directory
    res.render('index');
  });
};
