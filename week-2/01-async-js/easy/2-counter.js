const logIt = (i) => {
    console.log(i);
}
const counterCallback = (i) => {
    setTimeout( () => {logIt(i); counterCallback(i + 1)}, 1000);
}

// for(let i = 0; i < 10; i++){
    counterCallback(0);
// }