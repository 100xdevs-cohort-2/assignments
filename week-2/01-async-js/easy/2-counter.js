function thisWillCall(){
    console.log("this is getting called so many times...")
    callAgain();
}

function callAgain(){
setTimeout(thisWillCall, 1000)
}

callAgain();