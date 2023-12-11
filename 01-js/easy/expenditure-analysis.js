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
  let invoice = [];
  
  for (let i = 0; i < transactions.length; i++) {
    let categoryAlreadyExists = false
    
    if (invoice.length) {
      for (let j = 0; j < invoice.length; j++) {
        if (invoice[j].category === transactions[i].category) {
          invoice[j].totalSpent += transactions[i].price
          categoryAlreadyExists = true
        } 
      }
    }

    if (!categoryAlreadyExists) {
      invoice.push({ category: transactions[i].category, totalSpent: transactions[i].price }) 
    }
  }

  return invoice;
}

module.exports = calculateTotalSpentByCategory;
