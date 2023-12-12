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
  const totalExpenses = {};

  //populate the totalExpenses
  for(let i=0; i<transactions.length; i++){
    const {category, price} = transactions[i];
    if(totalExpenses[category] === undefined){
      totalExpenses[category] = price;
    }
    else totalExpenses[category] += price;
  }

  //creation of results object
  const results = Object.entries(totalExpenses).map(([category, total])=>({
    "category" : category,
    "totalSpent" : total
  }));

  return results;
}

module.exports = calculateTotalSpentByCategory;
