/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Step 1: Create an empty array to store the results.
  const result = [];

  // Step 2: Go through each transaction in the provided array.
  transactions.forEach(transaction => {
    // Step 3: Check if there's already an object with the same category in the result array.
    const existingCategory = result.find(item => item.category === transaction.category);

    // Step 4 & 5: If it exists, add the price of the current transaction to the totalSpent.
    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    } else {
      // If it doesn't exist, create a new object for that category.
      result.push({
        category: transaction.category,
        totalSpent: transaction.price
      });
    }
  });

  // Step 6: Return the array containing the total spent for each category.
  return result;
}

// This line exports the function so it can be used in other parts of the program.
module.exports = calculateTotalSpentByCategory;
