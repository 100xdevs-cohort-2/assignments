function clock() {
  setInterval(() => {
    const day = new Date()
    console.log(day.toLocaleTimeString() + "  " + day.toLocaleTimeString("en-us", { hour12: false }));
  }, 1000)
}
clock()
// const time = new Date("01/01/2022 09:15 PM")
// console.log(time.toTimeString().substring(0, 8))



