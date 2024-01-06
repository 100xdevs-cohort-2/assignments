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
// {itemName:"Amway", "Category": FMCG, price: 100, timestamp: 2020-01-01}
function calculateTotalSpentByCategory(transactions) {
  let totals = {};
  for (let i = 0; i < transactions.length; i++) {
    if (totals[transactions[i].category]) {
      totals[transactions[i].category] += transactions[i].price;
    } else {
      totals[transactions[i].category] = transactions[i].price;
    }
  }
  let result = [];
  for (let category in totals) {
    let obj = {};
    obj['category'] = category;
    obj['totalSpent'] = totals[category];
    result.push(obj);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;