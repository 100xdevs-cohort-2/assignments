// function counterWithoutSetinterval(n){
//     let count = 0;
//     for(let i = 0;i<n;i++){
//         setTimeout(()=>{
//             console.log(count);
//             count++;
//         },1000*i);
//     }
// }

// counterWithoutSetinterval(100);

// we can use recursion as well
let count = 0;

function counter() {
    console.log(`counter: ${count}`);
    count++;
    setTimeout(counter, 1000);
}
counter();