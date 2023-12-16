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
  let res = [];
  let hashMap = {};
  for (let i = 0; i < transactions.length; i++) {
    let category1 = transactions[i].category;
    let price1 = transactions[i].price;

    if (category1 in hashMap) {
      hashMap[category1] += price1;
    } else {
      hashMap[category1] = price1;
    }
  }

  for (let i in hashMap) {
    res.push({ category: i, totalSpent: hashMap[i] });
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
