var http = require('http');
var fs   = require('fs');
var url = require('url'); 


http.createServer(function(peticion, respuesta) {
	
    if (peticion.url.='/dni' ) {
		
	
	  var cadena = url.parse(peticion.url, true);
	var dni = cadena.query.num;  

	

	 var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
      var posicion = dni%23;
      var letra = cadena.substring(posicion,posicion+1);
	respuesta.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
	  respuesta.end(dni+letra);
     
    
    }else{
			 respuesta.writeHead(400, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
		  respuesta.end('error,no es la url esperada!');
	}
  }

).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');