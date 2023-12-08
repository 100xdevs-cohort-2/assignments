// This function checks if two provided strings are anagrams of each other
function isAnagram(str1, str2) {
  // Convert both strings to lowercase to ensure the comparison is case-insensitive
  // Split each string into an array of characters
  // Sort the array of characters
  // Join the sorted array back into a string
  // The above steps are done for both strings
  // If the resulting strings are equal, then the original strings are anagrams
  return str1.toLowerCase().split('').sort().join() == str2.toLowerCase().split('').sort().join();
}

// Export the function for use in other modules
module.exports = isAnagram;