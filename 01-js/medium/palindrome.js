/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpahbet(s){
	return s.length === 1 && s.match(/[a-z]/i);
}

function isPalindrome(str) {
	const strLen = str.length;
	if (strLen==0){
		return true;
	}
	
	for(i=0,j=strLen-1;i<j;){
		while (!(isAlpahbet(str[i]))){
			i++;
		}
		while (!(isAlpahbet(str[j]))){
			j--;
		}
		if(!(str[i].toLowerCase() == str[j].toLowerCase())){
			return false;
		}
		i++;
		j--;
	}
	return true;
}

module.exports = isPalindrome;
