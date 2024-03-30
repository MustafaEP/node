const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
//özelliğimizi seçtik('view engine') sonrada kullanacağımız templete engine'yi seçtik
//global bir değer.internet üzerinden çekilir. Sistem anlar .view engine'yi set ettik.
app.set('views', './views');
//pug dosyalarımızı views klasörünün altına ekleyeceğimizi gösterdik


const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin.js');
const userRoutes = require('./routes/user');
const router = require('./routes/admin.js');

const errorController = require('./controllers/errors.js')

//bodyparser middleware olarak eklendi.
//Kullanıcıdan bilgi almayı kolaylaştırır.
app.use(bodyParser.urlencoded({ extended: false }));

//public dosyasını genele açtık. Artık uygulama çalıştığında public klasörünün içindeki verilere erişilebilecek
//Bu sayade index dosyamıza bağlanıldığında index.html dosyası verileri çekebilecek.
app.use(express.static( path.join(__dirname, "/public") ));

//routes
app.use('/admin', adminRouter);
app.use(userRoutes);

// app.set('title', 'MySite');
// //kalıcı olarak kaydettik.
// console.log(app.get('title'));
// //kayıdı okuduk

app.use(errorController.get404Page);


app.listen(8080, () => {
    console.log('Listining on port 8080');
});