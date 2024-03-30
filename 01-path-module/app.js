const path = require('path');

let result = path.resolve('app.js');
result = path.parse(__filename);

console.log(result);
console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);