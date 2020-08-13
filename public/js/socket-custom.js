var socket = io();
        // Escuchar info, sucesos
        socket.on('connect', function(){
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function() {
            console.log('Perdimos conexion con el server');
        });

        // Enviar info
        socket.emit('enviarMensaje', {
            usuario: 'Funk',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Respuesta server:', resp);
        });

        // Escuchar info
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor:', mensaje);
        });