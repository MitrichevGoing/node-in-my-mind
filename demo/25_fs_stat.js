const fs = require('fs');

fs.stat('./25_s_stat.js',(err, status) => {
  if(err) {
    console.log('====================================');
    console.log('文件不存在');
    return;
    console.log('====================================');
  }
  console.log('====================================');
  console.log(status.isFile());
  console.log(status.isDirectory());
  console.log(status);
  console.log('====================================');
})