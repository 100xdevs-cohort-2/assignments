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
  let myMap = new Map();

  transactions.forEach((obj) => {
    myMap.set(obj.category, (myMap.get(obj.category) || 0) + obj.price);
  });

  return Array.from(myMap, ([x, y]) => ({
    category: x,
    totalSpent: y,
  }));
}

module.exports = calculateTotalSpentByCategory;
