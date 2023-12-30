// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


const showTime = function()
{
    const time = setInterval(function()
    {
        const date = new Date(); 
        const hours = (date.getHours()>12 || date.getHours()===0)?(Math.abs(date.getHours()-12)):date.getHours();
        const str = (date.getHours()>=12 && date.getMinutes()>=1 && date.getHours()<=23 && date.getMinutes()<=59)? "PM" : "AM"; 
        console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"\t\t"+hours+":"+date.getMinutes()+":"+date.getSeconds()+" "+str); 
    },1000); 
}; 


showTime(); 