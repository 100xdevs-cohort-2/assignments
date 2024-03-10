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
  let res = {};
  let res2 = [];
  transactions.forEach((element) => {
    if (element.category in res) {
      res[element.category] += element.price;
    } else {
      res[element.category] = element.price;
    }
  });
  for (elm in res) {
    res2.push({ category: elm, totalSpent: res[elm] });
  }
  return res2;
}

module.exports = calculateTotalSpentByCategory;
