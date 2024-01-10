function count(){
    setTimeout(()=>{
        console.log("1 sec")
        setTimeout(()=>{
            console.log("2 sec")
        },2000)
    },1000)
}

count();