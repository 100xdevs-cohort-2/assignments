let i=0;
const n = 10;

const intervalId = setInterval(intervalCallback, 1000);
function intervalCallback(){
    if(i >= n){
        clearInterval(intervalId);
    }
    if(i<n){
        console.log("Counter : ", i++);
    }
}
