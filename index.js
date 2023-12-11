// // class Animal {
// //   constructor(name, legCount, sound) {
// //     this.name = name;
// //     this.legCount = legCount;
// //     this.sound = sound;
// //   }

// //   speak() {
// //     console.log(
// //       ` ${this.name} makes a noise of ${this.sound} and it has ${this.legCount} legs`
// //     );
// //   }
// // }

// // let result = new Animal();
// // result.name = "moi";
// // result.sound = "fai fai";
// // result.legCount = "4";
// // result.speak();
// // console.log(result);

// // console.log("---------------------divider---------------------");

// // let result1 = new Animal();
// // result1.name = "das babu";
// // result1.sound = "sf sf";
// // result1.legCount = "8";
// // console.log(result1);
// // result1.speak();

// // ---dates classes

// const date = new Date();
// // console.log(date.getDate());
// // console.log(date.getFullYear());
// // console.log(date.getMonth() + 1);
// // console.log(date);
// console.log(date.getTime());

// // setInterval(() => {
// //   const date = new Date();
// //   let timer =
// //     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// //   console.log(timer);
// // }, 1000);

// const users = [{name:"saif"}]

const users = `{"name":"md saif" ,"age":"25"}`;

let result = JSON.parse(users);


console.log(result["name"]);


function findSquare(n) {
  return n * n;
}

function findCube(n) {
  return n * n * n;
}

// function sumOfSquare(a,b){
//   let val = findSquare(a)
//   let val1 = findSquare(b)

//   return val+val1
// }

// function sumOfCube(a,b){
//   let val = findCube(a)
//   let val1 = findCube(b)

//   return val+val1
// }

function findSum(num1, num2, fn) {
  let val = fn(num1);
  let val1 = fn(num2);

  return (result = val + val1);
}

// console.log(sumOfSquare(2,2))
// console.log(sumOfCube(2,2))

console.log(findSum(2, 2, findSquare));
console.log(findSum(2, 2, findCube));
