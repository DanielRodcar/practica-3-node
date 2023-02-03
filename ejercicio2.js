var http = require('http');
var fs   = require('fs');
http.createServer(function(peticion, respuesta) {
    if (peticion.url == '/dni' ) {
     
    fs.readFile('./instrucciones.html', function(err, data) {
            respuesta.end(data);
        });
    }else{
			 respuesta.writeHead(400, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
		  respuesta.end('error,url invalida!');
	}
  }

).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');