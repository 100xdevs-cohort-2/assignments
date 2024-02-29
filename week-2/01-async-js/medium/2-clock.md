Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function getCurrentTime() {
    const now = new Date();
  
    const hours = now.getHours().toString().padStart(2, '0');
// 1. now.getHours(): This part gets the current hour from the Date object now. It returns an integer value representing the hour in the local time zone.

//2. .toString(): Converts the obtained hour to a string. This is necessary because the padStart method is a string method.

//3. .padStart(2, '0'): This method pads the string from the start (left) with zeros ('0') until the string reaches a length of 2 characters. This is used to ensure that the hour is represented with at least two digits. For example, if the current hour is 9, this line would convert it to the string '09'.
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const formattedTime24 = `${hours}:${minutes}:${seconds}`;
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hourNumber = hours - "12";
    const formattedHours12 = (hours >=12 ? hourNumber : hours ).toString().padStart(2, '0');
    const formattedTime12 = `${formattedHours12}:${minutes}:${seconds} ${ampm}`;
  
    console.log(`24-hour format: ${formattedTime24}`);
    console.log(`12-hour format: ${formattedTime12}`);
  }
  
  // Update the clock every second
  setInterval(() => {
    getCurrentTime();
  }, 1000);
  