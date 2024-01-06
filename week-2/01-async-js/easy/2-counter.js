let counter=0

function count(){
    setTimeout(count,1000);
    console.log(++counter)
}

setTimeout(count,1000)
