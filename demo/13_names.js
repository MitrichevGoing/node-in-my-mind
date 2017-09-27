const {basename, dirname, extname} = require('path');

const filePath = 'Users/Potter/Documents/mitrichev/front_end/node-in-my-mind/demo/f1_fs.js';


console.log('====================================');
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));
console.log('====================================');