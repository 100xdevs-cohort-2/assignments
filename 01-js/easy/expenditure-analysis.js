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
  totalSpentByCategory = {};
  for (const { category, price } of transactions)
    totalSpentByCategory[category] = (totalSpentByCategory[category] || 0) + price;

  return Object.entries(totalSpentByCategory).map((item) => {
    return { category: item[0], totalSpent: item[1] };
  });
}

module.exports = calculateTotalSpentByCategory;
