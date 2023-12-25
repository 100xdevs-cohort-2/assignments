let a = 0;
function counter(){
a ++;
console.log("Counter : " + a + " seconds" );

function clear(){
console.clear();
}
setTimeout(clear,1000);

}
setInterval(counter,1000)

