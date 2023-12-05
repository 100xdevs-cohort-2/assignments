/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  /**
   * STEP 1
   * ------
   * Comparing Parameter if str1 and str2 are not string,
   * Comparing the length of str1 and str2 are equals to 0
   * 
   * If both the above conditions are not fulfilled then it will return false  
   */
  if (typeof str1 !== "string" || typeof str2 !== "string" || str1.length === 0 || str2.length === 0) {
    return false;
  } 

  /**
   * STEP 2
   * ------- 
   * Converting both the strings to uppercase format for uniform word format
   */
  const uppercaseStr1 = str1.toUpperCase();
  const uppercaseStr2 = str2.toUpperCase(); 

  /**
   * STEP 3
   * ------
   * Resuffelling Characters
   * Defined two new constants which will store the new resuffelled value of uppercaseStr1 and uppercaseStr2
   * Split them into single characters
   * Sorting the characters into an order
   * Joining them all together to creater a new word.
   */
  const resuffelledstr1 = uppercaseStr1.split('').sort().join('');
  const resuffelledstr2 = uppercaseStr2.split('').sort().join('');

  /**
   * STEP 4
   * -------
   * Comparing the new values stored constants created in STEP 3
   */
 return resuffelledstr1 === resuffelledstr2; 

}

const str1 = 'Evil';
const str2 = 'Vile';

console.log(isAnagram(str1, str2));

module.exports = isAnagram;

