// Calculate the time it takes between a setTimeout call and the inner function actually running

var beforeSetTimeOut = new Date().getTime();
var executingInnerFunction;

setTimeout(() => {
  executingInnerFunction = new Date().getTime();
  console.log(executingInnerFunction - beforeSetTimeOut);
}, 2000);
