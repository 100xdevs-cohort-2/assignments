let count =0;
function increaseCount(){
    count++;
    console.log(count);
    setTimeout(increaseCount,1000)
}
increaseCount()