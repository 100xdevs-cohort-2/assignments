Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let timeData = [10,59,0];
console.clear();
function counter(){
    let MaxSec = 60;
    let MaxMin = 60;
    let Day = 12;
    let i  = 55;
        let interval = setInterval(() => {
            console.clear();
            timeData[2] = i;
            console.log(`${timeData[0]}:${timeData[1]}:${timeData[2]}`);
            i++;
            if (MaxSec < i){
                timeData[1] += 1;
                i = 1; 
                if (timeData[1] >= 59){
                    timeData[0] += 1;
                    timeData[1] = 0;
                }
            } 
        }, 1000);
}
counter();


