/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const arr= str.split('');
  let s = [];
  arr.forEach(element => {
    if(element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122){
      s.push(element);
    }
  });
  // console.log(s);
  str = s.reverse().join('');
  // console.log(s);
  s = s.reverse().join('')
  // s = s.join('')
  // console.log(s);
  // console.log(str);
  return str==s;
}
// let a = isPalindrome('hello');
// console.log(a);
module.exports = isPalindrome;
