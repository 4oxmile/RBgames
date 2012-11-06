

var start = function( ) {
    io.sockets.on('connection', function( socket ) { 
        socket.on('server', function( data ) { 
            console.log( data );  
        }); 
       
        socket.on('makeID', function( data ) {
            socket.emit('makeID', { result : robot.makeID( data) }); 
        });
        

        console.log('io.connection!!'); 
    });
}

var robot = function(){
    var makeID = function( id ) {
        console.log( 'makeID:' + id );    
        
        return true;    
    }
    return {
        makeID : makeID 
    }
}();



exports.start = start;



