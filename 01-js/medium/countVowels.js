/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let data = str.toLowerCase();
  data = data.split('');
  vowels = ['a', 'e', 'i', 'o', 'u']
  let ans = 0;
  for(let i = 0;i<data.length;i++)
  {
    if(vowels.includes(data[i]))
    {
      ans ++;
      continue;
    }
  }
  return ans;
}

console.log(countVowels('programming'));