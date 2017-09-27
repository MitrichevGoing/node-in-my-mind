const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf-8');


const buf = Buffer.from('中文字符串');

for(let x=0;x<buf.length;x++){
  const b = Buffer.allocUnsafe(5);
  buf.copy(b,0,x);

  console.log(b.toString());
}

for(let x=0;x<buf.length;x++){
  const b = Buffer.allocUnsafe(5);
  buf.copy(b,0,x);

  console.log(decoder.write(b));
  
}