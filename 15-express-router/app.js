const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
//bodyparser middleware olarak eklendi.
//Kullanıcıdan bilgi almayı kolaylaştırır.

//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, ress) => {
    ress.status(404).send('<h3>Sayfa Bulunamadı</h3>')
})


app.listen(8080, () => {
    console.log('Listining on port 8080');
});