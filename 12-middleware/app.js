const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("middleware 1 çalıştırıldı");
    next();
})
app.use((req, res, next) => {
    console.log("middleware 2 çalıştırıldı");
    res.send('<h3>Merhaba Expresss.js</h3>');
})

app.listen(8080, () => {
    console.log('Listining on port 8080');
});