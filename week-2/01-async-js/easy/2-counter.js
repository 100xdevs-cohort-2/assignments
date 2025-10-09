let i=0;
function tick(){

    console.log(i);
    i++;
    setTimeout(() => tick(), 1000);
}

tick()