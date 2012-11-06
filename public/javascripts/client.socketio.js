
  


var socket = io.connect('http://foxmile.net:3000');
  socket.on('news', function( data) {
    console.log(data)
    socket.emit('server', { hello : 'server' })
  });
  socket.emit('makeID', '1234');
  socket.on('makeID', function( data ) {
    console.log( 'makeID ', data );
  });


  console.log('block script'); 


