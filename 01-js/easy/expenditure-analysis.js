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
  const totalSpentByCategory = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (!totalSpentByCategory[category]) {
      totalSpentByCategory[category] = price;
    } else {
      totalSpentByCategory[category] += price;
    }
  });
  return Object.keys(totalSpentByCategory).map((category) => ({
    category: category,
    totalSpent: totalSpentByCategory[category],
  }));
}

module.exports = calculateTotalSpentByCategory;
