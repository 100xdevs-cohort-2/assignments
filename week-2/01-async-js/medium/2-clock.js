

let counter = () =>{
    let date = new Date()
    let min  = date.getMinutes()
    let hour = date.getHours()
    let sec = date.getSeconds()
    console.log(`${hour}:${min}:${sec}`)
    
}

let clear = setInterval(counter,1000)

setTimeout(()=>{
    clearInterval(clear)
},21000)