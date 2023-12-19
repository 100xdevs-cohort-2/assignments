function sleep(sec){
    return new Promise((resolve) => {
  setTimeout(resolve,sec*1000)
})}

async function timer(){
    let t = 0
    console.log("ok")
    while (true) {
        await sleep(1)
        console.log(t++);
    }
}

timer()