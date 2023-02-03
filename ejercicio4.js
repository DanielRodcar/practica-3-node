var http = require('http');
var fs   = require('fs');
var url = require('url'); 
var dir='Copia';

http.createServer(function(peticion, respuesta) {
	
    if (peticion.url=='/escribirse')  {
		
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
		
	}
	fs.writeFileSync('./Copia/holaMundo.txt', 'Daniel Rodriguez Carrasco');
	  
	respuesta.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
      });
	  
	  respuesta.end('ya se ha realizado las tareas correctamente ');
     
    
    }else{
			 respuesta.writeHead(400, { 
        'Content-Type': 'text/plain;charset=utf-8'
      });
		  respuesta.end('error,no es la url esperada!');
	}
  }

).listen(8083, '127.0.0.3');
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');