function findLargestElement(numbers) {
    if (numbers.length === 0) {
        // Return undefined for an empty array
        return undefined;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Example usage:
const inputArray = [3, 7, 2, 9, 1];
const result = findLargestElement(inputArray);
console.log(result); // Output: 9
