let count=0;
function counter(count){
    setInterval(()=>{
        count++;
        console.log(count);
    },1000);
}
counter(count)