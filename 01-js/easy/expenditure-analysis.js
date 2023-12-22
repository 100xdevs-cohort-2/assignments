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
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category doesn't exist in categoryTotals, create it
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the price to the total for the category
    categoryTotals[category] += price;
  });

  // Convert categoryTotals to the desired output format
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

