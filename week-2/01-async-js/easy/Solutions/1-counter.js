function counter(){

    setInterval(() => {
        let date = new Date()
        console.log(`${date.getHours()} :${date.getMinutes()} :${date.getSeconds()} `)
    }, 1000);
}

counter();