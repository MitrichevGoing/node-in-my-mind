const fs = require('fs');

const result = fs.readFile('./01_fs.js', (err, data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  } 
});

//null 同步
console.log(result);