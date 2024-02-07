count = 0;
function repeat(){
	setTimeout(() => {
		console.log(count);
		count++;
		repeat();
	},1000);
}

repeat();