

var socket = io.connect('http://localhost:3000');
//var socket = io.connect('http://foxmile.net:3000');

socket.on('connect', function () {
  // socket connected
	console.log('connect');
});
socket.on('custom', function ( data ) {
  // server emitted a custom event
	//console.log('custom : ', data );
	alert( data );
});
socket.on('disconnect', function () {
  // socket disconnected
    console.log('disonnect');
});

socket.send('hi there');




$('#asdf').on('click',function() {
	var val = $('input').val();
	socket.send( val );
});



