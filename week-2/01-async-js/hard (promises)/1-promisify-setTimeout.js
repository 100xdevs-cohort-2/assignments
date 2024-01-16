/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}

module.exports = wait;
function delay(seconds){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Promise resolved after " +seconds +" seconds");
    },seconds*1000);
  });
}

const secondsToWait = 5;

delay(secondsToWait)
.then(function(result){
  console.log(result);
})
.catch(function(error){
  console.log("Error" +error);
})
