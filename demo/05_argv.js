/**
 *  argv
 *  argv0
 *  execArgv
 *  execPath
 */

 const {argv, argv0, execArgv, execPath} = process;

 argv.forEach(item => {
   console.log('====================================');
   console.log(item);
   console.log('====================================');
 });

 console.log('====================================');
 console.log(argv0);
 console.log('====================================');

 console.log('====================================');
 console.log(execArgv);
 console.log('====================================');