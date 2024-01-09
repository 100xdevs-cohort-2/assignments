function counter(n) {
    i = n
    setTimeout(() => {
        console.log(i);
        counter(n + 1);
    }, 1000)

}
counter(0);

// // // BestOneIFound
// // let seconds=0;
// // const myCounter = function(){
// //     console.log(seconds)
// //     seconds++
// //     setTimeout(myCounter,1000)
// // }
// myCounter();