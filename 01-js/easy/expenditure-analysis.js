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
  if (transactions.length === 0) return []

  const finalResult = []
  const categories = []
  let totalAmount = 0
  

  for (let i = 0; i < transactions.length; i++) {   // extracting all unique categories
    if (!categories.includes(transactions[i].category)) categories.push(transactions[i].category)
  }

  for (let i = 0; i < categories.length; i++) {
    const result = {
      category: '',
      totalSpent: 0
    }
    totalAmount = 0
    for (let j = 0; j < transactions.length; j++) {
      if (categories[i] === transactions[j].category) {
        totalAmount += transactions[j].price
      }
    }
    result.category = categories[i]
    result.totalSpent = totalAmount
    finalResult.push(result)
  }

  return finalResult;
}


module.exports = calculateTotalSpentByCategory;
