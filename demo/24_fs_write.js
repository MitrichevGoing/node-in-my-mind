const fs = require('fs');

fs.writeFile('./text','This is text', {
  encoding: 'utf8'
},(err) =>{
  if(err) throw err;

  console.log('====================================');
  console.log('');
  console.log('====================================');
})

fs.writeFile('./text2','This is text', 'utf8',(err) =>{
  if(err) throw err;

  console.log('====================================');
  console.log('');
  console.log('====================================');
})

const buf = Buffer.from('this is a buffer file');

fs.writeFile('./text3',buf, (err) =>{
  if(err) throw err;

  console.log('====================================');
  console.log('');
  console.log('====================================');
})
