// Can you make it so that it updates every second, and shows time in the following formats - 
//
//  - HH:MM::SS (Eg. 13:45:23)
//
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


setInterval(() => {
  const date = new Date()
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
  console.log(time)
}, 1000)
