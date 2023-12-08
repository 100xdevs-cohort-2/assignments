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
  expenditures = [];

  for(let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let foundExpenditure = false;
    for (let j = 0; j < expenditures.length; j++) {
      let expenditure = expenditures[j];
      if(transaction.category === expenditure.category) {
        foundExpenditure = true;
        expenditures[j].totalSpent += transaction.price;
      }
    }
    if(!foundExpenditure) {
      expenditures.push({
        category: transaction.category,
        totalSpent: transaction.price
      })
    }
  }

  return expenditures;
}

module.exports = calculateTotalSpentByCategory;
