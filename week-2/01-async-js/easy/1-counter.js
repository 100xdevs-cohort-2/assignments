let a=1
let intervalFunc = setInterval(()=>{
    if(a>14){
        clearInterval(intervalFunc)
    }
    console.clear()
    console.log(a)
    a++
},1000)

//looks like the clear interval function is too a async function