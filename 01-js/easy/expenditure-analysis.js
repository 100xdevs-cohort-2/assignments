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
  const categoriesMap = new Map();
  const ans = [];
  transactions.map((transaction) => {
    if (categoriesMap.has(transaction.category)) {
      categoriesMap.set(
        transaction.category,
        categoriesMap.get(transaction.category) + transaction.price
      );
    } else {
      categoriesMap.set(transaction.category, transaction.price);
    }
  });
  const updatedObject = Object.fromEntries(categoriesMap);
  for (let [key, value] of Object.entries(updatedObject)) {
    ans.push({
      category: key,
      totalSpent: value,
    });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
