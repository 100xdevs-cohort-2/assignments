function date(){
    const datee = new Date()
    let sec = datee.getSeconds()
    let min = datee.getMinutes()
    let hr = datee.getHours()
    let st = ''
    if(hr<12){
      st = 'AM'
    }else if(hr>=12){
        st = 'PM'
    }
    console.log(`${hr}:${min}:${sec} ${st}`)
}
setInterval(date,1000)