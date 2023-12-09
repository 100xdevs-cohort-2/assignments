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
  let categories = [];
  for (let i = 0; i < transactions.length; i++) {
    let categoryProperty = transactions[i].category;
    if (!categories[categoryProperty]) {
      categories[categoryProperty] = transactions[i].price;
    } else {
      categories[categoryProperty] += transactions[i].price;
    }
  }
  let ans = [];
  for (let category in categories) {
    ans.push({ category: category, totalSpent: categories[category] });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
