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
  for (let transaction of transactions) {
    let category = transaction["category"];
    let price = transaction["price"];
    map.set(category, (map.get(category) || 0) + price);
  }
  let ans = [];
  for (let x of map.entries()) {
    ans.push({ category: x[0], totalSpent: x[1] });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
