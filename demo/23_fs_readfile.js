const fs = require('fs');

/**
 * 异步操作
 */
fs.readFile('./23_fs_readfile.js','utf8', (err, data) => {
  if (err) {
    throw err;
  }

  console.log('====================================');
  console.log(data);
  console.log('====================================');
});

/**
 * 同步操作
 */
const data = fs.readFileSync('./23_fs_readfile.js','utf-8');

console.log('====================================');
console.log(data);
console.log('====================================');

