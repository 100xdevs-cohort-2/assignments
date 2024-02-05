/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let ss = [",",''];
  if(ss[1] in ss){
    return true;
  }
  let arr1 = [];
  for(let i of str){
    arr1.push(i);
  }  
  let arr2 = [];
  for(let i = str.length-1 ;i>=0 ;i-- ){
    arr2.push(str[i]);
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(isPalindrome('cooc'));
console.log(isPalindrome('coocs'));
console.log(isPalindrome('rAcEcAr'));
console.log(isPalindrome(''));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('Was it a car or a cat I saw'));
console.log(isPalindrome('Able, was I ere I saw Elba!'));

module.exports = isPalindrome;
