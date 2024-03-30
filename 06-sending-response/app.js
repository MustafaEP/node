const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
   
    /*
    // res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'Hi';


    // res.write(JSON.stringify({ name: 'Samsung', model: 'S9 Plus' })); 
    // res.write('<html><head><title>Merhaba Dünya</title></head><body><p>Merhabalar Türkiyem</p></body></html>'); 
    
    
    res.end(); 
    */

    fs.readFile('index.html', (err, file) => {
        if(err) {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.write('Dosya Bulunamadı...');
        }else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'Ok';
            res.end(file);
        }
    })

});

server.listen(8080);
console.log('Listening Port on 8080');
