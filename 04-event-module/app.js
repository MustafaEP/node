const Logger = require('./logger');
const logger = new Logger();

//listener kayıt et
logger.on('connection', (args) => {
    console.log("Bağlantı Kuruldu.", args);
})


//event'i tetikle
logger.log('MEP İçeride');