function counter(){
    let date  = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    setTimeout(()=>  counter(),1000)
}
counter()