const fs = require('fs'); 

// const files = fs.readdir('./', (error, data) => {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log(data);
//     }
// })



// const data = fs.readFile('deneme.txt', 'utf8', (error, data) => {
//     if(error)
//         console.log(error);
//     else 
//         console.log(data);
// })


// fs.writeFile('deneme2.txt', 'Merhaba Dünya Deneme2.txt içerisindesiniz.', (error) => {
//     if (error) {
//         console.log(error);
//     } 
//     else {
//         console.log("Başarılı");   
//     }
// })

// fs.appendFile('deneme3.text', 'Merhabalar ', (error)=> {
//     if (error) {
//         console.log(error);
//     }
//     else{
//         console.log("Eklendi");
//     }
// })

// fs.unlink('deneme.txt', (error) => {
//     if (error) {
//         console.log(error);
//     }
// })

// fs.rename('deneme.txt', 'yenideneme.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })