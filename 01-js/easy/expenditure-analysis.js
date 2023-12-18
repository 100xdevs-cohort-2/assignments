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
  var obj = {};
  for (var i = 0; i < transactions.length; i++) {
    var category = transactions[i].category;
    var price = transactions[i].price;
    if (category in obj) {
      obj[category] += price;
    } else {
      obj[category] = price;
    }
  }
  var all = Object.keys(obj).map((category) => ({
    category: category,
    totalSpent: obj[category],
  }));
  return all;
}

module.exports = calculateTotalSpentByCategory;
