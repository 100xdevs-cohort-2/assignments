let i = 0
const intervalID = setInterval(function (){
    console.log(i++)
    if(i == 10){
        clearInterval(intervalID)
    }
},1000)