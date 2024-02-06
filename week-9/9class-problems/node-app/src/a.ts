// function greet(firstName: string) {
//     console.log("Hello", firstName)
// }
// greet("Shiv")✅
// greet(123)❌

// function sum(a: number, b: number) : number{
//     return a + b;
// }

// const value = sum(12, 12);
// console.log(value)

// function isLegal(age: number): boolean {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const res = isLegal(23);

function delayedFunction(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedFunction(function () {
  console.log("i ran after 1 sec");
});
