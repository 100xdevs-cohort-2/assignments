/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  str = str.toLowerCase();
  let sub1 = "";
  for(let i=0;i<str.length;i++){
    if(str[i]!=" " && !pattern.test(str[i]) ){
      sub1+=str[i];
    }
  }
  let sub = "";
  for(let i=str.length-1;i>=0;i--){
    if(str[i]!=" " && !pattern.test(str[i])){
      sub+=str[i];
    }
  }
  console.log(sub1);
  console.log(sub);
  if(sub==sub1){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
