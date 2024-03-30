const express = require('express');
const app = express();


app.use('/add-product', (req, res, next) => {
    console.log("middleware çalıştırıldı");
    res.send('<h3>Adding Product Page</h3>');
});

app.use('/product-list', (req, res, next) => {
    console.log("middleware çalıştırıldı");
    res.send('<h3>Prodduct List Page</h3>');
});
app.use('/', (req, res, next) => {
    console.log("middleware çalıştırıldı");
    res.send('<h3>Merhaba Expresss.js</h3>');
});

app.listen(8080, () => {
    console.log('Listining on port 8080');
});