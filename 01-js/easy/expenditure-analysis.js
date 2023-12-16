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
  let result = [];
  let map = new Map();

  transactions.forEach((t) => {
    if(t.category){
      if(map.has(t.category)){
        map.set(t.category, map.get(t.category)+t.price);
      }
      else{
        map.set(t.category, t.price);
      }
    }
  })

  map.forEach((value, key) => {
    result.push({category: key, totalSpent: value});
  })

  return result;
}

module.exports = calculateTotalSpentByCategory;
