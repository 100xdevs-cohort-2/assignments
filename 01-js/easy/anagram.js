//Algorithm for the below code

//1. convert string to lowercase
//2. split string into array
//3. sort array
//4. join array back into string
//5. compare strings
//6. return true or false


function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join() == str2.toLowerCase().split('').sort().join();
}

module.exports = isAnagram;
