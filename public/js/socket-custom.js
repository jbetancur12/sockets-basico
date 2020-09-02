var socket = io();

//Escuchar
socket.on('connect', function () {
  console.log('COnectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexión con el servidor');
});

//Enviar información
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Jorge',
    mensaje: 'Hola Mundo',
  },
  function (res) {
    console.log('Respuesta server: ', res);
  },
);

//Escuchar información
socket.on('enviarMensaje', function (resp) {
  console.log(resp);
});
