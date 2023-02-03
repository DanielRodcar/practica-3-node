var http = require('http');
http.createServer(function(peticion, respuesta) {
    if (peticion.url == '/dni' || peticion.url == '/escribir') {
      respuesta.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
      respuesta.end('Bienvenido!');
    }else{
			 respuesta.writeHead(400, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
		  respuesta.end('error,url invalida!');
	}
  }

).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');