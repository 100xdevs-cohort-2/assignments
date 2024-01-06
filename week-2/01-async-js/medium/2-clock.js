// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function currTime(){
    var currtime = new Date();

    console.log(`Current Machine time: ${currtime.getHours()} : ${currtime.getMinutes()} : ${currtime.getSeconds()}`);
}

//For displaying in am and pm 

// var hr = currtime.getHours();
// var min = currtime.getMinutes();
// var sec = currtime.getSeconds();

// var samay = hr>=12 ? "PM" : "AM" ;
// hr = hr % 12;
// console.log(`${hr} : ${currtime.getMinutes()} : ${currtime.getSeconds()} ${samay}`)

//To update everysecond

function update(t){
    setInterval(currTime, t*1000);
}

update(1);