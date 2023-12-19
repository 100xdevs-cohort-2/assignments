let counter = 1;

function printRes(n){
  console.log(n);
}

for(; counter <= 100; counter++){
  setTimeout(printRes, counter*1000, counter);
}
