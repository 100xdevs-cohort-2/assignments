function clock() {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        // HH:MM::SS AM/PM
        console.log(hour + ":" + date.getMinutes() + ":" + date.getSeconds(), hour > 12 ? "PM" : "AM");
    }, 1000)
}

clock()