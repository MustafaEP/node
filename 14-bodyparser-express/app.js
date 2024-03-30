const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//bodyparser middleware olarak eklendi.
//Kullanıcıdan bilgi almayı kolaylaştırır.

app.get('/add-product', (req, res, next) => {
    res.send(
            `
            <html>
                <head>
                    <title>Add a New Product</title>
                </head>
                <body>
                    <form action="/product" method="POST">
                        <input type="text" name="productName" />
                        <input type="submit" value="Save Product" />
                    </form>
                </body>
            </html>
            `
        );
});

app.post('/product', (req, res, next) => {
    
    console.log(req.body);

    res.redirect('/');
    //Kullanıcıyı yönlendirme
})

app.use('/', (req, res, next) => {
    res.send('<h3>Merhaba Expresss.js</h3>');
});

app.listen(8080, () => {
    console.log('Listining on port 8080');
});