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

  -  -  Once you've implemented the logic, test your code by running : npx jest tests/expenditure-analysis.test.js
*/

function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
