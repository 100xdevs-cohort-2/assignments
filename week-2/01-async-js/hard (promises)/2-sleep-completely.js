/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(res,rej){
       const cuurTime=new Date();
       while(milliseconds>((new Date().getTime())-cuurTime.getTime())){
        res("returned something")
       }
    })
}
sleep(100).then((res)=>{
    console.log(res)
})

module.exports = sleep;
