
var ids = {};
ids.asdf = 'asdf';

var checkID = function( id ) {
	if( id in ids ) {
		return true;
	}
    return false;	
};



var start = function( ) {
io.sockets.on('connection', function (socket) {

	socket.emit('custom', 'server> custom' );

	socket.on('message', function( data ) {
		console.log( data );
	});

}); 


 
}

exports.start = start;



