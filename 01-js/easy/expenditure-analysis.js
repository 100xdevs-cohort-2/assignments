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
  for (let index = 0; index < transactions.length; index++) {
    let element = transactions[index];
    let category = element.category;
    let price = element.price;
    let found = false;
    for (let idx = 0; idx < result.length; idx++) {
      if(result[idx].category === category){
        result[idx].totalSpent += price;
        found = true;
        break;
      }
    }
    if(!found){
      result.push({ category: category, totalSpent: price })
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
