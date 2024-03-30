const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
//bodyparser middleware olarak eklendi.
//Kullanıcıdan bilgi almayı kolaylaştırır.


//public dosyasını genele açtık. Artık uygulama çalıştığında public klasörünün içindeki verilere erişilebilecek
//Bu sayade index dosyamıza bağlanıldığında index.html dosyası verileri çekebilecek.
app.use(express.static( path.join(__dirname, "/public") ));

//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, ress) => {
    ress.status(404).sendFile( path.join(__dirname, 'views', '404.html') );
})


app.listen(8080, () => {
    console.log('Listining on port 8080');
});