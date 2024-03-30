const http = require('http');

const server = http.createServer((req, res) => {
    //requset talep
    //response cevap

    if(req.url === '/'){
        res.write('hello World');
        res.end();
    }

    if(req.url === '/api/products'){
        res.write('Products List');
        res.end(); 
    }
});


server.listen(3000);
console.log('Listening Port on 3000...');