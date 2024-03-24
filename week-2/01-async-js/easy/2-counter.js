const n = 10;

const counter = (val) => {
    if(val > n-1){
        return;
    }
    console.log("Counter : ", val);
    counter(val+1);
};

setTimeout(() => counter(0), 1000);