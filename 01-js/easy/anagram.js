function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Sorted = str1.toLowerCase().split("").sort();
  const str2Sorted = str2.toLowerCase().split("").sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1Sorted[i] !== str2Sorted[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
