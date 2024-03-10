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
  let cal = {};
  for (let idx in transactions) {
    const { category, price } = transactions[idx];

    if (cal[category]) {
      cal[category] += price;
    } else {
      cal[category] = price;
    }
  }
  let res = [];
  for (let category in cal) {
    let obj = {
      category: category,
      totalSpent: cal[category],
    };
    res.push(obj);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
