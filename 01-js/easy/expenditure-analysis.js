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
  let category = []
  let category_wise_expenditure = []

  for(let transaction of transactions) {
    let idx = category.indexOf(transaction.category) 
    if(idx !== -1) {
      category_wise_expenditure[idx].totalSpent += transaction.price; 
    } else {
      let first_transaction = {category: transaction.category, totalSpent: transaction.price};
      category_wise_expenditure.push(first_transaction);
      category.push(transaction.category);
    }
  }

  return category_wise_expenditure;
}

module.exports = calculateTotalSpentByCategory;
