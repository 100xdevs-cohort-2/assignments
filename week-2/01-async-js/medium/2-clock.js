


function counter() {
    var currentDate = new Date();
    var hr = 0;
// Get the current time
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var merdian = 'AM';
if(hours>=12){
merdian = 'PM';

}
if(hours>12){
    hr= hours-12;
}else{
    hr = hours;
}
console.log('Current time: ' + hr + ':' + minutes + ':' + seconds + " " + merdian);
console.log('Current time: ' + hours + ':' + minutes + ':' + seconds );
   
    setTimeout(counter,1000)
}

counter();