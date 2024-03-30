const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/products', (req, res) => {
    res.send("Ürünler Listelendi");
})


app.listen(8080, () => {
    console.log('Listining on port 8080');
});