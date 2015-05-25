var express = require('express');
var models  = require('./models');
var passport = require('passport');
var cors = require('cors');


var app = express();

app.use(cors());

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express, passport);

app.set('port', (process.env.PORT || 3000));

models.sequelize.sync()   //Add {force: true} in sync if want to drop data.  
.done(function(){
  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
  });

})

// export for testing and flexibility
module.exports = app;
