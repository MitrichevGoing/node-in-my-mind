/**
 * 1.buffer 用于处理二进制数据流
 * 2.实例类似整数数组，大小固定
 * 3.C++代码在V8堆外分配物理内存
 */

 console.log('====================================');
 console.log(Buffer.alloc(10));
 console.log(Buffer.alloc(20));
 console.log(Buffer.alloc(5,1));
 console.log(Buffer.from([1,2,3]));
 console.log(Buffer.from('test','utf-8'))
 console.log(Buffer.from('test','base64'))
 console.log('====================================');

 /**
  * Buffer.byteLength
    Buffer.isBuffer()
    Buffer.concat()
  */

  console.log('====================================');
  console.log(Buffer.byteLength('test'));
  console.log(Buffer.byteLength('中国'));
  console.log(Buffer.isBuffer({}));
  console.log(Buffer.isBuffer(Buffer.from([1,2,3])));
  console.log('====================================');

  const buf1 = Buffer.from('this');
  const buf2 = Buffer.from('is');
  const buf3 = Buffer.from('my');

  const buf = Buffer.concat([buf1,buf2,buf3]);

  console.log('====================================');
  console.log(buf.toString());
  console.log('====================================');

  /**
   *  buf.length
   *  buf.toString()
   *  buf.fill()
   *  buf.equals()
   *  buf.indexOf()
   *  buf.copy()
   */