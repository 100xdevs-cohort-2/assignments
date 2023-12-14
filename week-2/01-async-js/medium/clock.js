const showtime =()=>{
    setInterval(()=>{
        const date= new Date;
        console.clear()
        const noon = date.getHours>=12 ? 'AM':'PM'
         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${noon}`)

     },1000)
}
showtime();