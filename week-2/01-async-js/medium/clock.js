function clock() {
  setInterval(() => {
    const time = new Date()
    console.log(time.toLocaleTimeString() + "  " + time.toLocaleTimeString("en-us", { hour12: false }));
  }, 1000)
}
clock()
// const time = new Date()
// console.log(time.toLocaleTimeString("en-us", { hour12: false }))

