let count = 0

let counter = () =>{
    count += 1
    console.log(count)
}

let clear = setInterval(counter,1000)

setTimeout(()=>{
    clearInterval(clear)
},21000)