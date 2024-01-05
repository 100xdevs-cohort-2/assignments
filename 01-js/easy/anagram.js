/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const a = new Array(256);
  const b = new Array(256);
  for(let i=0;i<256;i++){
          
    a[i]=0;
    b[i]=0;
  }
        for(let i=0;i<str1.length;i++){
          let x=str1.charCodeAt(i);
          if(x>=65 && x<=90){
            x=x+32;
          }
          a[x]++;
        }

        for(let i=0;i<str2.length;i++){
          let x=str2.charCodeAt(i);
          if(x>=65 && x<=90){
            x=x+32;
          }
          b[x]++;
          
        }
        //console.log(b);

        for(let i=0;i<256;i++){
          
          if(a[i]!==b[i]){
            return false;
          }
        }
        return true;
}

module.exports = isAnagram;
