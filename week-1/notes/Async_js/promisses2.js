// there are three states of promises 
// => pending, resolved, rejected
// when resolved then promise contain the final result of the promise

var d= new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    }, 1000)
});

function callback(){
    console.log(d);
}

d.then(callback);
console.log(d);
setTimeout(function(){
    d.then(console.log(d));
},2000)