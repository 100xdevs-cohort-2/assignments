
function clock(){
    //let time = new Date().toLocaleTimeString();
    setInterval(function(){
        console.log(new Date().toLocaleTimeString()); 
        }, 1000);
}

clock()