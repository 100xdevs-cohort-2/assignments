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
  if(transactions.length === 0){
    return []
  }

  let spent = {};

  transactions.forEach((item) => {
    if(spent[item.category]){
      spent[item.category].totalSpent = spent[item.category].totalSpent + item.price; 
    } else {
      spent[item.category] = {
        category: item.category,
        totalSpent: item.price,
      }
    }
  });

  return Object.values(spent)
}

module.exports = calculateTotalSpentByCategory;
