/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var reformedStr = reform(str.toLowerCase());
  var revStr = "";
  for(var i=reformedStr.length - 1; i>=0; i--){
    revStr = revStr + reformedStr[i];
  }
 
  if(reformedStr===revStr){
    return true
  }else{
    return false
  }
 
}

function reform(str){
  var split = str.split("")
  var ref = "";
  for(var i=0; i<split.length; i++){
    if(split[i] === " " || split[i] === "." || split[i] === "!" || split[i] === "?" || split[i] === ","){

    }else{
      ref = ref + split[i];
    }
  }
  return ref;
}

module.exports = isPalindrome;
