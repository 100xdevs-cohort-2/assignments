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
  const categoryMap = new Map();
  const len = transactions.length;

  for (let index = 0; index < len; index++) {
    const currCount = categoryMap.get(transactions[index].category);
    if (currCount === undefined) {
      categoryMap.set(transactions[index].category, transactions[index].price);
    } else {
      categoryMap.set(
        transactions[index].category,
        currCount + transactions[index].price
      );
    }
  }

  const res = [];

  for (let [category, totalSpent] of categoryMap) {
    res.push({ category, totalSpent });
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
