// Entering your first name and last name

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Please enter your name: ', name => {
//     console.log(`Hello, ${name}!`);
//     readline.close();
//   });

// let int = 1
// while(int<=1000){
//     console.log(int)
//     int++
// }
// const age = [13, 15, 16, 18, 20, 21, 22, 23, 24, 25]

// for(let i = 0; i<age.length; i++){
//     if(age[i]%2 == 0) {
//         console.log(age[i])
//     }
// }

// const allUsers = [{
//     firstName: "Sahil",
//     gender: "Male"
// }, {
//     firstName: "Pratik",
//     gender: "Male"
// }, {
//     firstName: "Anshita",
//     gender: "female"
// }]

// for( var i =0; i<allUsers.length; i++) {
//     if(allUsers[i]["gender"]== "Male"){
//         console.log(allUsers[i])
//     }
// }

// function sum(a, b) {
//     return a + b
// }

// const value = sum(2,3)
// const value2 = sum(4,5)

// console.log(value)
// console.log(value2)

function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b)
    return ans;
}
function sum(a, b) {
    return a + b;
}
const value = calculateArithmetic(10, 20, sum);
console.log(value)

// setInterval
// setTimeout