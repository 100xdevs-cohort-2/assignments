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
  if(transactions.length !== 0){
    const expenses = {};
      for (let i = 0; i < transactions.length; i++) {
        const category = transactions[i]["category"];
        const price = transactions[i]["price"];

        if (!expenses[category]) {
            // If the category is not in the expenses object, initialize it
            expenses[category] = price;
        }
        else {
            // If the category is already in the expenses object, accumulate the price
            expenses[category] += price;
        }
    }
    // Convert expenses object to an array of objects
    const output = Object.keys(expenses).map(category => ({ category, totalSpent: expenses[category] }));
    return output;
  }
  return[] 
}

module.exports = calculateTotalSpentByCategory;
