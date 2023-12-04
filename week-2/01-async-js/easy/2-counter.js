// Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 1;

function printRes(n){
	console.log(n);
}

for(; counter <= 100; counter++){
	setTimeout(printRes, counter*1000, counter);
}





































































//(Hint: setTimeout)
