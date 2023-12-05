function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const result = countVowels("Hello, World!");
console.log(result); // Output: 3 (e, o, o are vowels)
