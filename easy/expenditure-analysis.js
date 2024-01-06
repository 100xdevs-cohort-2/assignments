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
  const categoryMap = {};

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    if (categoryMap[category]) {
      // If the category already exists in the map, add the price to the total spent
      categoryMap[category].totalSpent += price;
    } else {
      // If the category doesn't exist in the map, create a new entry
      categoryMap[category] = {
        category: category,
        totalSpent: price,
      };
    }
  }

  // Convert the categoryMap object to an array of values
  const result = Object.values(categoryMap);

  return result;
}

module.exports = calculateTotalSpentByCategory;

