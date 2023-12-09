currentCounter=1

function printCounter(){
    console.log(currentCounter)
    currentCounter++
}

for(let i=0;i<100;++i){
    setTimeout(printCounter,10000)
}

for (let i=0;i<100;++i){
    setInterval(printCounter,1000)
}