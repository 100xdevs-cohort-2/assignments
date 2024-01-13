Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 <!-- 
 function time() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hour}:${minute}:${sec}`);
}

const time = setInterval(time,1000);
 -->

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 <!-- const set = now.toLocaleStringTime() -->
