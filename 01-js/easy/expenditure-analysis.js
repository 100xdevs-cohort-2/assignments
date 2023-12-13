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
  for (let i = 0; i < transactions.length; i++) {
    const {category, price} = transactions[i];
    const existingItem = result.find(item => item.category === category);
    if (!existingItem) {
      result.push({category: category, totalSpent: price});
    }
    else {
      let index = result.indexOf(existingItem);
      const updatedItem = {...existingItem, totalSpent: existingItem.totalSpent + price};
      result = [...result.slice(0,index), updatedItem, ...result.slice(index+1)];
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
