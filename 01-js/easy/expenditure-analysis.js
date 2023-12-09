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
  let categoryPriceMap = new Map()
  for (const transaction of transactions) {
    let categoryPrice = categoryPriceMap.get(transaction.category)
    categoryPriceMap.set(transaction.category, (categoryPrice ?? 0) + transaction.price)
  }

  let totalSpent = []
  for (const category of categoryPriceMap.keys()) {
    totalSpent.push({ category: category, totalSpent: categoryPriceMap.get(category) })
  }

  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
