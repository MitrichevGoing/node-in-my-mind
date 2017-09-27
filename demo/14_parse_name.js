const {parse, format} = require('path');

const filePath = 'Users/Potter/Documents/mitrichev/front_end/node-in-my-mind/demo/f1_fs.js';

const ret = parse(filePath);
console.log('====================================');
console.log(ret);
console.log(format(ret));
console.log('====================================');