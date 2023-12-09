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
  let n = transactions.length;
  let output = [];
  let uniqueCatVal = new Map();

  //1. Iterate through given object
  for (let i = 0; i < n; i++) {
    let currentCategory = transactions[i].category;
    let currentPrice = transactions[i].price;

    if (currentCategory) {
      if (uniqueCatVal.has(currentCategory)) {
        uniqueCatVal.set(
          currentCategory,
          uniqueCatVal.get(currentCategory) + currentPrice
        );
      } else {
        uniqueCatVal.set(currentCategory, currentPrice);
      }
    }
  }

  uniqueCatVal.forEach((value, key) => {
    output.push({ category: key, totalSpent: value });
  });

  return output;
}

module.exports = calculateTotalSpentByCategory;
