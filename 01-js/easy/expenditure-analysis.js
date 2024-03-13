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
  let len = transactions.length;
  let map = new Map();
  let result = [];
  for(let i = 0; i < len; ++i) {
    if(map.has(transactions[i].category) == false) {
      map.set(transactions[i].category, transactions[i].price);
    } else {
      map.set(transactions[i].category, map.get(transactions[i].category) + transactions[i].price);
    }
  }
  map.forEach((price, category) => {
    let newObject = { category: category, totalSpent: price };
    result.push(newObject);
  });
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
