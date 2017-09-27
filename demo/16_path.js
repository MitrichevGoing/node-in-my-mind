console.log('====================================');
console.log('path:',__filename);
console.log('====================================');

console.log('====================================');
console.log('path:',__dirname);
console.log('====================================');

console.log('====================================');
console.log('path:',process.cwd());
console.log('====================================');


/**
 * __dirname, __filename 总是返回文件的绝对路径
 * process.cwd 总是返回执行node命令的文件夹
 */