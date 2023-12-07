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
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].category === category) {
        result[j].totalSpent += price;
        found = true;
        break;
      }
    }
    if (!found) {
      result.push({ category: category, totalSpent: price });
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
