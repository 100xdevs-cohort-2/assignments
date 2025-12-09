function isAnagram(str1, str2) {
 str1 = str1.toLowerCase().replace(/\s+/g,'')
 str2 = str2.toLowerCase().replace(/\s+/g,'')

 if(str1.length!=str2.length){
  return false;
 }

 const freq ={};

 for(let char of str1){
  freq[char] =(freq[char]|| 0)+1;
 }

 for(let char of str2){
  if(!freq[char]) return false;
  freq[char]--;
 }
return true;
}

module.exports = isAnagram;
