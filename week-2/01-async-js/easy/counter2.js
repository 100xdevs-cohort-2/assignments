//implementing setInterval using setTimeout
/**
 * setInterval runs like this -> 
 * delay() -> fn() -> delay -> fn() -> delay -> fn()
 * 
 * so it is basically a wrapped setTimeout
 * : Like you are packaging one timeout function in another and you do it endlessly.
 * So when unboxing happens for the outermost function -> it prints the countValue, then goes to unbox the next one.
 */


let countValue = 1;

function mySetInterval(fn, duration) {

    const recurseHelper = () => {
        fn();
        return setTimeout(recurseHelper, duration);
    }

    setTimeout(recurseHelper, duration);
}

const timerFunc = () => {
    console.clear();
    console.log("Count:" +countValue);
    countValue++;
}

mySetInterval(timerFunc, 1000);
