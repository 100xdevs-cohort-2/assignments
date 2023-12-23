
function Counter(){
    let counter = 0;
    setInterval(()=>{
        console.log(counter++)
    },1000)
}

Counter();