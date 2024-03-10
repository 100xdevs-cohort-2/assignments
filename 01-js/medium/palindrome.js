/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPunctuationOrSpace(c){
    let punctuations = [' ', '.', '!', '?', ',', `'`, `"`];
    if(punctuations.findIndex((e) => e === c) === -1) return false;
    return true;
}
function isPalindrome(str) {
    str = str.toLowerCase();
    let s = 0, e = str.length-1;
    while(s < e){
        while(isPunctuationOrSpace(str[s])){
            s++;
        }
        while(isPunctuationOrSpace(str[e])){
            e--;
        }
        if(str[s] !== str[e])
            return false;
        s++;
        e--;
    }
    return true;
}

module.exports = isPalindrome;
