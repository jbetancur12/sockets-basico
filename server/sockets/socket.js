const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario Conectado');

  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación',
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  //Escchar al cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'TODO SALION BIEN!!',
    //   });
    // } else {
    //   callback({
    //     resp: 'TODO SALIO MAL!!!',
    //   });
    // }
  });
});
