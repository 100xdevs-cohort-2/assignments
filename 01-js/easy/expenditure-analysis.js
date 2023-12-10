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
  let mapres = new Map();
  transactions.forEach(e => {

    if (mapres.has(e.category)) {
      let val = mapres.get(e.category);
      mapres.set(e.category, val + e.price);
    
    } else {
      mapres.set(e.category,e.price)
    }
  })
  return Array.from(mapres,([name,value])=>({name,value}))
}

module.exports = calculateTotalSpentByCategory;
