/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) =>
    setTimeout(resolve, n * 1000));
}
async function main(){
    await wait(3);
    console.log('nice');
    console.log('way better');
}
main();

// async function main() {
//     // let val = await wait(5);
//     // console.log(val);
//     wait(5).then(function (val) {
//         console.log('task ' + val);
//     })
// }
// main();

// const asyncfoo = async () => {
//     await new Promise ((resolve) => {
//         setTimeout(resolve, 2000)
//     });
//     console.log('nice');
//     console.log('way better');
    
// }
// asyncfoo(); // Promise