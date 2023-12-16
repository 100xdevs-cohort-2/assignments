function isPalindrome(str) {
  // split string to array
  let strArr = []
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      strArr.push(str[i].toLowerCase())
    }
  }
  //loop through array check if first and last are equal 
  let l = 0;
  let r = strArr.length - 1;
  while (l <= r) {
    if (strArr[l] !== strArr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;