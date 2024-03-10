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
  const result = [];

  for (let i = 0; i < transactions.length; i++) {
    // Check if the category is already in the result array
    const existingCategoryIndex = result.findIndex(
      (item) => item.category === transactions[i].category
    );

    if (existingCategoryIndex !== -1) {
      // If category exists, add the price to the totalSpent
      result[existingCategoryIndex].totalSpent += transactions[i].price;
    } else {
      // If category doesn't exist, add a new entry to the result array
      result.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
