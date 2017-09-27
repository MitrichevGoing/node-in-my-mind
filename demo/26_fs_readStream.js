const fs = require('fs');

const readStream = fs.createReadStream('./26_fs_readStream.js');

readStream.pipe(process.stdout);

const writeStream = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
  const num = parseInt(Math.random()*10);
  console.log(num)
  if(num<7){
    writeStream.write(num +''); //必须写字符串和buffer
  } else {
    clearInterval(tid);
    writeStream.end();
  }
},200);

writeStream.on('finish',() => {
  console.log('====================================');
  console.log('done!');
  console.log('====================================');
})
