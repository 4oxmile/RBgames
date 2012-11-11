
var ids = {};
ids.asdf = 'asdf';

var checkID = function( id ) {
	if( id in ids ) {
		return true;
	}
    return false;	
};


var ids={};
var start = function( ) {
io.sockets.on('connection', function (socket) {

	socket.emit('custom', 'server> custom' );
	socket.on('message', function( data ) {
	    if( ids[data] !== undefined ) {
			console.log('Exist');	
			socket.emit('custom', 'Exist' + data );	
		}
		else {
			ids[data] = data;	
			console.log( data );
			socket.emit('custom', data );	
			
			socket.broadcast.emit('message', socket.id , data );	
		}	
	});

}); 


 
}

exports.start = start;



