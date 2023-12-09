/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    console.log('starting hold')

    return new Promise((res,rej)=>{setTimeout(()=>{
        res('Halt completed')
    },seconds*1000)})

}

sleep(3).then((res)=>{
    console.log(res)
})