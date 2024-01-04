/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function(resolve){
    setTimeout(function(){
        resolve()
    },n*1000)
  })
}

async function op(n){
  let res = await wait(n)
  res
} 
op(1)
module.exports = wait;
