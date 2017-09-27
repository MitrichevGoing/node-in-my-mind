const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./26_fs_readStream.js').then(data => {
  console.log(data.toString());
}).catch(ex =>{
  console.log(ex);
});

async function test() {
  try{
    const content = await read('./27_fs_promise.js');
    console.log('====================================');
    console.log(content.toString());
    console.log('====================================');
  }catch(ex){
    console.log(ex);
  }
}

test();

