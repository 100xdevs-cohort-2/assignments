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
  let map = new Map();
  for (let i = 0; i < transactions.length; i++) {
    let categoryName = transactions[i].category;
    let val = transactions[i].price;
    if (map.has(categoryName)) {
      let newVal = map.get(categoryName) + val;
      map.set(categoryName, newVal);
    } else {
      map.set(categoryName, val);
    }
  }

  let transactionArray = [];
  if (transactions.length == 0) return transactionArray;
  for (let [key, value] of map) {
    let categoryObject = {};
    categoryObject["category"] = key;
    categoryObject["totalSpent"] = value;
    transactionArray.push(categoryObject);
  }

  return transactionArray;
}

module.exports = calculateTotalSpentByCategory;
