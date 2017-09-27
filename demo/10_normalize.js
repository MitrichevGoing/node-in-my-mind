const {normalize} = require('path');
// const normalize = require('path').normalize;

console.log('====================================');
console.log(normalize('/usr//local/bin'));
console.log('====================================');

console.log('====================================');
console.log(normalize('/usr//local/../bin'));
console.log('====================================');