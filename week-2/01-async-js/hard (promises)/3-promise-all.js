function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t * 1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t * 1000);
    });
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then(() => Date.now() - start);
}

async function onDone() {
    const totalTime = await calculateTime(1, 2, 3);
    console.log(`Total time: ${totalTime} ms`);
}

onDone();  
module.exports = calculateTime;
