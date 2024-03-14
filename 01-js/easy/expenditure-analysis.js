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
  const result = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (!result[category]) {
      result[category] = 0;
    }

    result[category] += price;
  });

  // Convert the result into an array of objects
  const resultList = Object.keys(result).map((category) => ({
    category,
    totalSpent: result[category],
  }));

  return resultList;
}

module.exports = calculateTotalSpentByCategory;
