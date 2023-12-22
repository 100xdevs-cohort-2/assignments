// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let a=1
function counter (){
    console.log(a++)
    setTimeout(counter,1000)
}

const fs = require("fs")

