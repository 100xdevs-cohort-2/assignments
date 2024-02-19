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
  const totalMap = new Map();
  transactions.forEach((transaction) => {
    if (!totalMap.has(transaction?.category)) {
      totalMap.set(transaction?.category, transaction?.price);
    } else {
      let newTotal = totalMap.get(transaction.category) + transaction?.price;
      totalMap.set(transaction?.category, newTotal);
    }
  });
  const structuredData = [];
  totalMap.forEach((value, key) => {
    structuredData.push({
      category: key,
      totalSpent: value,
    });
  });
  return structuredData;
}

module.exports = calculateTotalSpentByCategory;
