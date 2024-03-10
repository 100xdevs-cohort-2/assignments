// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// //cutit
// function cutIt(str, startIndex, endIndex){
//   let newStr = "";
//   for(let i=0;i<str.length;i++){
//     if(i >= startIndex && i < endIndex){
//       newStr = newStr + str[i];
//     }
//   }
//   return newStr;
// }
// const value = "manish kumanr nirmalkar";
// // slice  is also work same like cutit but slice is short and sweet
// console.log(cutIt(value,2,5));

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// const str = "hello world";
// console.log(str.replace("world","javascript"));

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// const name  = "hi my name is manish kumar nirmalkar"
// const words = name.split//("m")//("")//("n")//(",") //split your string based on delimeiter
// console.log(words)

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// const strim = "       manish    nirmalkar   ";
// console.log(strim.trim()); /// its a trim out extra space beginning and end 

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
