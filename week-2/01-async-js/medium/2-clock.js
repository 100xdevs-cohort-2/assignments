const updateTime = () => {
    const time = new Date()

    console.log(`${time.getHours()}:${time.getMinutes()}::${time.getSeconds()}`)
    console.log(time.toLocaleTimeString('en-IN'))
}


setInterval(updateTime, 1000)
