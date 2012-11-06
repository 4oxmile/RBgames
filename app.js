
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , socketio = require('./socketio/start');

var app = express();
var server;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function(){
  app.use(express.errorHandler());
});

//route
app.get('/', routes.index);
app.get('/login', routes.login);

//404page
app.use(function(req,res){
    res.render('404.jade');
});


//socket.io
server = http.createServer(app);
io = require('socket.io').listen( server );
socketio.start();


server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});





