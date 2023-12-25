function clock(){
    const d = new Date();
    let text = d.toLocaleTimeString();
    console.log(text);
    
    function clear(){
        console.clear();
        }
        setTimeout(clear,1000);
}

setInterval(clock,1000);