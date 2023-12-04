/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function join(arr){
  for(let i = 0;i<arr.length;i++){
    arr[i] = arr[i].toLowerCase();
  }
  arr.sort();
  let res = '';
  for(let i = 0;i<arr.length;i++){
    if(arr[i] != ' '){
      res += arr[i];
    }
  }
  return res;
}

function isAnagram(str1, str2) {
    let ans1 = str1.split('');
    let ans2 = str2.split('');
    let fnans1 = join(ans1);
    let fnans2 = join(ans2);
    if(fnans1 == fnans2){
      return true;
    } 
    return false;
};

module.exports = isAnagram;
