const showtime =()=>{
    setInterval(()=>{
        const date= new Date;
         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
     },1000)
}
showtime();