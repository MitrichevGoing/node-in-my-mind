function test (n){
  //复杂代码
  console.log('====================================');
  console.log(n);
  console.log('====================================');
}

for (let i=0;i<100;i++){
  const n = parseInt(Math.random() * 10);
  
  test(n);
}