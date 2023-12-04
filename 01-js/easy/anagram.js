function isAnagram(str1, str2) {
 
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  
  if (cleanStr1.length !== cleanStr2.length) {
      return false;
  }

 
  const frequencyMap1 = {};
  const frequencyMap2 = {};

 
  for (let char of cleanStr1) {
      frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  
  for (let char of cleanStr2) {
      frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

   
  for (let key in frequencyMap1) {
      if (frequencyMap1[key] !== frequencyMap2[key]) {
          return false;
      }
  }

  return true;
}
module.exports = isAnagram;
