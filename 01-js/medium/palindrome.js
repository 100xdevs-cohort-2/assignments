/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g,"");

  // convert string to array
 let charArray = Array.from(str1);

 //create a reversed array 
  const poppedElement = [];
  while(charArray.length> 0){
    poppedElement.push(charArray.pop());
  }
  const reversedString = poppedElement.join('');
  console.log()
  return reversedString === str1;


}

module.exports = isPalindrome;
