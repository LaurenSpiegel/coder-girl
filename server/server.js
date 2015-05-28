/* 
* @Author: nimi
* @Date:   2015-05-25 10:32:38
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-05-27 19:05:49
*/

var express = require('express'),
    app = express(),
    models  = require('./models'),
    passport = require('passport'),
    cors = require('cors'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    messageController = require('./messages/messageController');

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist/'));

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express, passport);

app.set('port', (process.env.PORT || 3000));

models.sequelize.sync()  //Include {force: true} as argument in sync() if want DB to drop on server restart.
  .done(function(){
    server.listen(app.get('port'), function() {
    // app.listen(app.get('port'), function() {
      console.log("Node app is running at localhost:" + app.get('port'));
    });

  });

// initialize socket communication 
// var peopleOnline = 0;
io.on('connection', function(socket) {
  // peopleOnline++;
  // io.emit('user connected', peopleOnline);

  socket.on('send message', function(message) {
    // Insert that message to database
    messageController.createMessage(message);

    // Send that message to everyone.
    io.emit('new message', message);
  });

  // socket.on('disconnect', function() {
  //   peopleOnline--;
  //   io.emit('user disconnected', peopleOnline);
  // });

});

// export for testing and flexibility
module.exports = app;
