/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.replace(" ", "").toLowerCase();
    str2 = str2.replace(" ", "").toLowerCase();

    let sorted1 = str1.split("").sort();
    let sorted2 = str2.split("").sort();
        
    if(sorted1.length == sorted2.length){
        if(sorted1.length == 0){
            return true;
        }
    }else{
        return false;
    }

    if(sorted1.length)
    for(let i = 0; i < sorted1.length; i++){
        for(let j = 0; j < sorted2.length; j++){
            if(sorted1[i]==sorted2[j]){
                return true;
            }else{
                return false;
            }
        }
    }

}
module.exports = isAnagram;
