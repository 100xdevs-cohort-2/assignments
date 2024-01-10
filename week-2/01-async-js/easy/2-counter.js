 // modified version 
function counter(){
    for(let i =1 ;i < 10; i++){
        let delay = i*1000;
        setTimeout(()=>{
            console.log(`${delay}seconds have passed`)
        },delay)
    }
}


counter();