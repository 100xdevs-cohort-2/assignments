// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const date = new Date();
let time = date.toTimeString().substring(0,8) ; 
// time = "11:59:58";
let hour = time.substring(0,2) ;
let min = time.substring(3,5);
let second  = time.substring(6,8);

hour12 = hour<=12 ? hour : hour-12 ; 
hour12 = hour12<=9 ? "0" +hour12 : hour12

function k(){
    if( parseInt(second) >=59 ){
        second="00"
        if(parseInt(min) >=59){
            min ="00";
            if(parseInt(hour) >=23) hour="00"
            else hour = (parseInt(hour) + 1 )>9 ? parseInt(hour) + 1 : "0" + (parseInt(hour) + 1);
            if(parseInt(hour12) >=12) hour12="01"
            else hour12 = (parseInt(hour12) + 1 )>9 ? parseInt(hour12) + 1 : "0" + (parseInt(hour12) + 1) ;
        }
        else min = (parseInt(min) + 1 )>9 ? parseInt(min) + 1 : "0" + (parseInt(min) + 1)
    }
    else second = (parseInt(second) + 1 )>9 ? parseInt(second) + 1 : "0" + (parseInt(second) + 1);
    let meridian = (hour>=12)  ? "PM" : "AM" 
    console.log(hour + ":"+min+":"+second +"    "+ hour12 + ":"+min+":"+second , meridian);

}

setInterval(k,1000)

