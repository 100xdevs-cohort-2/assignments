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
    // Create an object to store total spending for each category
  const categoryTotals = {};

  // Iterate through each transaction in the list
  transactions.forEach(transaction => {
    // Extract category and price from the current transaction
    const { category, price } = transaction;

    // Update the total spending for the category in the categoryTotals object
    if (!categoryTotals[category]) {
      // If the category is not in categoryTotals, initialize it with the current transaction's price
      categoryTotals[category] = price;
    } else {
      // If the category is already present, add the current transaction's price to the total
      categoryTotals[category] += price;
    }
  });

  // Convert the categoryTotals object to an array of objects with the desired format
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  // Return the final result
  return result;
}

module.exports = calculateTotalSpentByCategory;
