/**
 * 放到当前队列队首
 */
setImmediate(() => {
  console.log('====================================');
  console.log('setImmediate');
  console.log('====================================');
});

setTimeout(() => {
  console.log('====================================');
  console.log('setTimeout');
  console.log('====================================');
},0);

/**
 * 放到当前执行队列队尾
 */
process.nextTick(() => {
  console.log('====================================');
  console.log('nextTick');
  console.log('====================================');
});

/**
 * 异步执行，setImmediate
 * nextTick -> setTimeOut -> setImmediate  执行速度
 */