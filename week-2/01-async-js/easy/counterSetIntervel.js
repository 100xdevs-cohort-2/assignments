// ## Counter with setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
/*
let counter = function () {
	setInterval(function () {
        let num = 30;
        if(num < 0){
            clearInterval;
        }
		console.log(num);
        num--;
	}, 1000);
}
counter();
*/
let counter = function(){
    let num = 10;
    let countDown = setInterval(function(){
        console.log(num);
        num--;
        if(num < 0){
            clearInterval(countDown);
        }
    }, 1000)
}
counter();