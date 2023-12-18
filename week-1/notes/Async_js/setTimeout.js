// setTimeout is an inbuilt async function


function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
// The 1000 in setTimeout(findSumTill100, 1000) represents the delay time
console.log("hello world");