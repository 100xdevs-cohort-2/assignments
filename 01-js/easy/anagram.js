/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
  let ans = [];
   let st1 =str1.split(' ').join('').toLowerCase();
   let st2 =str2.split(' ').join('').toLowerCase();
   if(st1.length !=st2.length)
   {
    return false;
   }
   else{
    for(let i=0;i<st1.length;i++)
   {
     for(let j=0;j<st2.length;j++){
       if(st1[i] == st2[j])
       {
         ans.push(st1[i]);
         break;
       }
     }
   }
   if(ans.length == st1.length && ans.length == st2.length)
   {
    return true;
   }
   else{
    return false;
   }
   }
}
console.log(isAnagram('School MASTER', 'The ClassROOM'));
