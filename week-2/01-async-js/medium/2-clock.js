setInterval(() => {
	hours = new Date().getHours();
	minutes = new Date().getMinutes();
	seconds = new Date().getSeconds();
	if(hours > 12){
		console.log(`${hours-12}:${minutes}:${seconds}`);
	}else{
		console.log(`${hours}:${minutes}:${seconds}`);
	}
},1000);

