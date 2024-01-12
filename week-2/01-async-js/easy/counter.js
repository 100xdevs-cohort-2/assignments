const counter = new Promise(function(resolve, reject) {
    setInterval(() => {
        const date = new Date();
        const time = date.getSeconds();
        console.log(time);
    }, 1000);
    resolve();
});

counter.then(() => {
    console.log("Counter");
});
