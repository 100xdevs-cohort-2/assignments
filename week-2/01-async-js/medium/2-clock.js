// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function delay() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async function counterWithoutSetInterval(start, in24hourformat) {
    await delay();
    start++;
    let d = new Date();
    if (in24hourformat) 
    {
        console.log(`${d.getHours() % 12}:${d.getMinutes()}:${d.getSeconds()} ${d.getHours() >= 12 ? "PM" : "AM"}`);
    } 
    else 
    {
        console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
    }
    if(start<=10)
    {
    counterWithoutSetInterval(start,in24hourformat);
    }
  }

  counterWithoutSetInterval(0,true);
  counterWithoutSetInterval(0,false);
