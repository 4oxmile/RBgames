

//var socket = io.connect('http://192.168.10.23:3000');
var socket = io.connect('http://foxmile.net:3000');

socket.on('exist', function( data ) {
	console.log( "ERROR : ", data );
});

socket.on('news', function( data ) {
		alert('nono');	
	console.log('news : ', data );
});


$('#asdf').on('click',function() {
	var val = $('input').val();
	socket.emit('addUser', { id : val } );
});



