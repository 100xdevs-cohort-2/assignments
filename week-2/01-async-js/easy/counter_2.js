let a = 0;

function counter() {
    a++;
    console.log("Counter : " + a + " seconds" );

function clear(){
console.clear();
}
setTimeout(clear,1000);

setTimeout(counter,1000);
}
 
counter();
