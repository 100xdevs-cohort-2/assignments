function wait1(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    let before = new Date().getTime();
    let p1 = wait1(t1);
    let p2 = wait2(t2);
    let p3 = wait3(t3);

    return Promise.all([p1,p2,p3])
    .then(()=>{
        let after = new Date().getTime();
        let diff = after-before;
        return diff;
    })
}