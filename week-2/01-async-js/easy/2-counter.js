let j=0;
for(i=0; i< 1000; i++){
    setTimeout(() => {
        console.clear()
        console.log(j)
        j+=1
    }, i * 1000)
}