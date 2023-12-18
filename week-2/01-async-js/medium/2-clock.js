function print24hrTime(){
    console.clear()
    let date = new Date()
    console.log(`${String(date.getHours()).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}::${String(date.getSeconds()).padStart(2,0)}`)
}

function print12hrTime(){
    console.clear()
    let date = new Date()
    if(date.getHours()>12){
        console.log(`${String(date.getHours()-12).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}::${String(date.getSeconds()).padStart(2,0)} PM`)
    }
    else{
        console.log(`${String(date.getHours()).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}::${String(date.getSeconds()).padStart(2,0)} AM`)
    }
}


//###############For 24 hour time format####################

setInterval(()=>{
    print24hrTime()
},1000)

//###############For 12 hour time format####################

// setInterval(()=>{
//     print12hrTime()
// },1000)