
var ids = {};
ids.asdf = 'asdf';

var checkID = function( id ) {
	if( id in ids ) {
		return true;
	}
    return false;	
};



var start = function( ) {
	io.sockets.on('connection', function( socket ) { 
		socket.on('addUser', function( data, socket ) {
			//Exist ID	
			if( checkID( data.id )) {
				socket.emit('news', { data : 'exist' } );
				console.log( 'existID');
			} 
			else {
				socket.id = data.id;
				ids[data.id] = data.id;		
				socket.emit('news', { data : 'nono' } );
		    	console.log( socket.id );	
			}
		});
	});
}

exports.start = start;



